export default function ({ types: t }) {
  const importDir = '../modules/';
  const exportDir = location.origin + '/ts-calculator/modules/';
  console.log(exportDir);

  return {
    visitor: {
      Program(path) {
        const body = path.get("body");

        for (const stmt of body) {
          if (!stmt.isImportDeclaration()) continue;

          const node = stmt.node;
          const source = node.source.value;

          // 対象外のパスは無視
          if (!source.startsWith(importDir)) continue;
	    
          const dynamicPath = source.replace(importDir, exportDir);

          const specifiers = node.specifiers;
          if (specifiers.length === 1 && t.isImportNamespaceSpecifier(specifiers[0])) {
            // import * as X from '...'
            const spec = specifiers[0];
            const variableDecl = t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier(spec.local.name),
                t.awaitExpression(t.callExpression(t.import(), [t.stringLiteral(dynamicPath)]))
              )
            ]);
            stmt.replaceWith(variableDecl);
            continue;
          }

          // 通常の import { ... } / import default の場合
          const properties = specifiers.map(spec => {
            if (t.isImportSpecifier(spec)) {
              return t.objectProperty(
                t.identifier(spec.imported.name),
                t.identifier(spec.local.name),
                false,
                spec.imported.name === spec.local.name
              );
            } else if (t.isImportDefaultSpecifier(spec)) {
              return t.objectProperty(
                t.identifier("default"),
                t.identifier(spec.local.name)
              );
            } else {
              throw new Error("Unsupported import specifier type: " + spec.type);
            }
          });

          const variableDecl = t.variableDeclaration("const", [
            t.variableDeclarator(
              t.objectPattern(properties),
              t.awaitExpression(t.callExpression(t.import(), [t.stringLiteral(dynamicPath)]))
            )
          ]);

          stmt.replaceWith(variableDecl);
        }
      }
    }
  };
}
