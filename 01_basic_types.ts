// ===== TypeScript 基礎学習 01: 基本的な型 =====

console.log("🎉 TypeScript学習を始めよう！");

// 1. 基本的な型の宣言
let message: string = "こんにちは、TypeScript！";
let age: number = 25;
let isStudent: boolean = true;

console.log("メッセージ:", message);
console.log("年齢:", age);
console.log("学生かどうか:", isStudent);

// 2. 型を明示的に指定しない場合（型推論）
let city = "東京"; // TypeScriptが自動的にstring型と推論
let temperature = 23.5; // TypeScriptが自動的にnumber型と推論

console.log("都市:", city);
console.log("気温:", temperature + "度");

// 3. 複数の型を許可する（Union型）
let score: number | string;
score = 85; // 数値でもOK
console.log("スコア（数値）:", score);

score = "A+"; // 文字列でもOK
console.log("スコア（文字列）:", score);

// 4. 配列の型
let colors: string[] = ["赤", "青", "緑"];
let numbers: number[] = [1, 2, 3, 4, 5];

console.log("色:", colors);
console.log("数値:", numbers);

console.log("\n✨ 基本的な型の学習が完了しました！"); 
