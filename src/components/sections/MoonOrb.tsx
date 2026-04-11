import { useEffect, useRef } from 'react';

export const MoonOrb = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef({ offsetX: 0, velocity: 0, isDragging: false, lastX: 0 });

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        const W = 280;
        const r = W / 2 - 1;

        function noise(x: number, y: number, seed: number) {
            const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.3) * 43758.5453;
            return n - Math.floor(n);
        }
        function fbm(x: number, y: number) {
            let v = 0, amp = 0.5, freq = 1, max = 0;
            for (let i = 0; i < 4; i++) {
                v += amp * noise(x * freq, y * freq, i);
                max += amp; amp *= 0.5; freq *= 2.1;
            }
            return v / max;
        }

        const craters = Array.from({ length: 28 }, () => ({
            cx: Math.random() * 1.6 - 0.3,
            cy: Math.random() * 1.4 - 0.2,
            r: Math.random() * 0.08 + 0.02,
            depth: Math.random() * 0.5 + 0.3,
        }));

        // Pre-bake geometry
        const geo = new Float32Array(W * W * 6);
        const valid = new Uint8Array(W * W);
        for (let py = 0; py < W; py++) {
            for (let px = 0; px < W; px++) {
                const nx = (px - W / 2) / r, ny = (py - W / 2) / r;
                const idx = py * W + px;
                if (nx * nx + ny * ny > 1) continue;
                valid[idx] = 1;
                const nz = Math.sqrt(1 - nx * nx - ny * ny);
                const uBase = Math.atan2(nx, nz) / (2 * Math.PI) + 0.5;
                const v = Math.asin(Math.max(-1, Math.min(1, ny))) / Math.PI + 0.5;
                const diff = Math.max(0, nx * -0.45 + ny * -0.27 + nz * 0.71);
                const b = idx * 6;
                geo[b] = uBase; geo[b + 1] = v;
                geo[b + 2] = nx; geo[b + 3] = ny; geo[b + 4] = nz; geo[b + 5] = diff;
            }
        }

        // Pre-bake terrain
        const TW = 128, TH = 64;
        const terrain = new Float32Array(TW * TH);
        for (let tv = 0; tv < TH; tv++) {
            for (let tu = 0; tu < TW; tu++) {
                const u = tu / TW, v = tv / TH;
                const t = fbm(u * 3.5, v * 3.5);
                let craterVal = 0, isRim = false;
                for (const c of craters) {
                    const du = Math.min(Math.abs(u - c.cx), 1 - Math.abs(u - c.cx));
                    const dist = Math.sqrt(du * du + (v - c.cy) * (v - c.cy));
                    if (dist < c.r * 1.15) {
                        if (dist < c.r * 0.8) craterVal += c.depth * (1 - dist / (c.r * 0.8)) * 0.7;
                        else { isRim = true; craterVal -= c.depth * 0.4; }
                    }
                }
                terrain[tv * TW + tu] = Math.max(0, Math.min(1, t * 0.6 + 0.2 - craterVal * 0.5 + (isRim ? 0.12 : 0)));
            }
        }

        const imgData = ctx.createImageData(W, W);
        const data = imgData.data;

        function drawMoon(dx: number) {
            for (let i = 0; i < W * W; i++) {
                const base = i * 4;
                if (!valid[i]) { data[base + 3] = 0; continue; }
                const g = i * 6;
                const u = ((geo[g] + dx) % 1 + 1) % 1;
                const v = geo[g + 1];
                const diff = geo[g + 5];
                const brightness = terrain[Math.floor(v * TH) * TW + Math.floor(u * TW) % TW];
                const s = Math.min(1, brightness * (0.15 + 0.85 * diff) / 0.65);
                data[base] = Math.min(255, 10 + s * 210 | 0);
                data[base + 1] = Math.min(255, 3 + s * 118 | 0);
                data[base + 2] = s * 10 | 0;
                data[base + 3] = 255;
            }
            ctx.putImageData(imgData, 0, 0);
        }

        drawMoon(0);

        const st = stateRef.current;
        let raf: number;

        function tick() {
            if (!st.isDragging) { st.velocity *= 0.95; st.offsetX += st.velocity + 0.0003; }
            st.offsetX = ((st.offsetX % 1) + 1) % 1;
            drawMoon(st.offsetX);
            raf = requestAnimationFrame(tick);
        }
        tick();

        const el = canvas.parentElement!;
        const onDown = (e: MouseEvent) => { st.isDragging = true; st.lastX = e.clientX; st.velocity = 0; };
        const onMove = (e: MouseEvent) => {
            if (!st.isDragging) return;
            st.velocity = (e.clientX - st.lastX) * 0.001;
            st.offsetX += st.velocity;
            st.lastX = e.clientX;
        };
        const onUp = () => { st.isDragging = false; };
        const onTouchStart = (e: TouchEvent) => { st.isDragging = true; st.lastX = e.touches[0].clientX; st.velocity = 0; };
        const onTouchMove = (e: TouchEvent) => {
            if (!st.isDragging) return;
            st.velocity = (e.touches[0].clientX - st.lastX) * 0.001;
            st.offsetX += st.velocity;
            st.lastX = e.touches[0].clientX;
        };
        const onTouchEnd = () => { st.isDragging = false; };

        el.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        el.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);

        return () => {
            cancelAnimationFrame(raf);
            el.removeEventListener('mousedown', onDown);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            el.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    return (
        <div className="relative flex justify-center items-center h-96 my-20 cursor-grab active:cursor-grabbing select-none">
            {[0, 1, 2].map(i => (
                <div key={i} className="absolute rounded-full border border-orange-600/10"
                    style={{ inset: `${i * -32}px`, animation: `spin ${22 + i * 14}s linear infinite ${i % 2 ? 'reverse' : ''}` }} />
            ))}
            <div className="absolute w-96 h-96 rounded-full bg-orange-600/10 animate-pulse" />
            <div className="relative w-72 h-72 rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ boxShadow: 'inset -60px -20px 80px rgba(0,0,0,0.85), inset 30px 20px 60px rgba(219, 17, 17, 0.15), 0 0 60px rgba(255, 0, 0, 0.65)' }}>
                <canvas ref={canvasRef} width={280} height={280} className="w-full h-full rounded-full" />
                <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 32% 30%, rgba(255, 0, 0, 0.2) 0%, transparent 45%)' }} />
            </div>
        </div>
    );
};