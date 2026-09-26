<?php
/**
 * Laragon Gateway for React Portfolio
 * 
 * File ini memungkinkan aplikasi portofolio diakses secara langsung
 * melalui Laragon (misal: http://portofolio.test) baik setelah dibuild
 * maupun dengan panduan otomatis jika belum dibuild.
 */

$distIndex = __DIR__ . '/dist/index.html';

if (file_exists($distIndex)) {
    // Sajikan hasil produksi Vite
    header('Content-Type: text/html; charset=UTF-8');
    readfile($distIndex);
    exit;
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Fajar Fadillah Wibowo - Laragon Environment</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #090d16;
            color: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .card {
            background: #111827;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 40px;
            max-width: 580px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            text-align: center;
        }
        h1 { font-size: 24px; margin-bottom: 12px; color: #38bdf8; }
        p { color: #94a3b8; line-height: 1.6; margin-bottom: 24px; }
        .code-box {
            background: #030712;
            border: 1px solid #1f2937;
            border-radius: 8px;
            padding: 14px;
            font-family: monospace;
            color: #10b981;
            text-align: left;
            margin-bottom: 24px;
            overflow-x: auto;
        }
        .btn {
            display: inline-block;
            background: #2563eb;
            color: #fff;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
        }
        .btn:hover { background: #1d4ed8; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Portofolio Siap Dijalankan!</h1>
        <p>Anda mengakses website ini melalui web server Laragon (Apache). Untuk menyajikan versi produksi tercepat, jalankan perintah build:</p>
        <div class="code-box">
            npm run build
        </div>
        <p>Atau untuk pengembangan dengan Hot Reload:</p>
        <div class="code-box">
            npm run dev
        </div>
        <a href="http://localhost:5173" class="btn" target="_blank">Buka Vite Dev Server (localhost:5173)</a>
    </div>
</body>
</html>
