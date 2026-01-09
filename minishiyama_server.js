// server.js

// 1. Expressモジュールを読み込む
const express = require('express');
// 2. Expressアプリケーションのインスタンスを作成
const app = express();
// 3. サーバーがリッスンするポート番号を定義
const port = 3000; // 例: 3000番ポート

// 4. ルートパス ('/') ではpublicフォルダの静的配信を使う
app.use(express.static("public"));

// 5. WebAPI ('/api/score') の処理
app.use(express.json());
app.post("/api/score", (req, res) => {
  // クライアントから送られてきたJSONデータ
  const data = req.body;
  console.log("受け取ったデータ:", data);

  // TODO: 本当はここでDBに保存する（13回以降の内容）
  // 今は仮に「受け取りました」と返すだけとするが、
  // 受け取ったdataを配列に保存してランキングを返送することも可能

  // okを返す
  res.json({ ok: true });  // ← Javascriptオブジェクトを用意する、「""」の有無に注意
});


// 6. サーバーを起動し、指定したポートでリクエストを待ち受ける
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Ctrl+C でサーバーを停止できます。');
});
