const operatorToFunction = {
  '+': 'add',
  '-': 'sub',
  '*': 'mul',
  '/': 'div',
  '%': 'mod',
  '+=': 'addEq',
};

const unaryOperatorToFunction = {
  '-': 'neg',
};

export default function operatorOverloadPlugin({ types: t }) {
//  console.log("✅ operator_overload plugin loaded");
  return {
    visitor: {
      BinaryExpression(path) {
        const { operator, left, right } = path.node;
        const fname = operatorToFunction[operator];
        if (!fname) return;

        path.replaceWith(
          t.callExpression(t.identifier(fname), [left, right])
        );
      },
	
      UnaryExpression(path) {
        const { operator, argument } = path.node;
        const fname = unaryOperatorToFunction[operator];
        if (!fname) return;

        path.replaceWith(
          t.callExpression(t.identifier(fname), [argument])
        );
      },
	
// ✨ 追加: 複合代入演算子（+=, -=, *=, /=, %=）の処理
      AssignmentExpression(path) {
        const { operator, left, right } = path.node;

        // 末尾が '=' で終わる演算子（+= や *= など）を対象にする
        // 比較演算子（==, ===）や通常の代入（=）は除外
        if (!operator.endsWith('=') || operator === '=' || operator === '==' || operator === '===') return;

        // 末尾の '=' を削って、元の二項演算子（+, * など）を取り出す
        const baseOperator = operator.slice(0, -1);
        const fname = operatorToFunction[baseOperator];
        if (!fname) return;

        // a *= b  =>  a = mul(a, b) の形に置換
        path.replaceWith(
          t.assignmentExpression(
            '=',
            left,
            // leftを2箇所で使い回すため、Babelの安全対策として cloneNode を使用します
            t.callExpression(t.identifier(fname), [t.cloneNode(left), right])
          )
        );
      }
    },
  };
};
