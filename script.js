["INFO" - 1:54:11 PM] Extension Name: esbenp.prettier-vscode.
["INFO" - 1:54:11 PM] Extension Version: 10.4.0.
["INFO" - 1:55:26 PM] Formatting file:///c%3A/Users/hamid/Documents/web/%D9%BE%D8%B1%D9%88%DA%98%D9%87%20%D9%BE%D8%A7%DB%8C%D8%A7%D9%86%DB%8C/site.html
["INFO" - 1:55:26 PM] PrettierInstance:
{
  "doc": {
    "builders": {
      "line": {
        "type": "line"
      },
      "softline": {
        "type": "line",
        "soft": true
      },
      "hardline": {
        "type": "concat",
        "parts": [
          {
            "type": "line",
            "hard": true
          },
          {
            "type": "break-parent"
          }
        ]
      },
      "literalline": {
        "type": "concat",
        "parts": [
          {
            "type": "line",
            "hard": true,
            "literal": true
          },
          {
            "type": "break-parent"
          }
        ]
      },
      "lineSuffixBoundary": {
        "type": "line-suffix-boundary"
      },
      "cursor": {
        "type": "cursor"
      },
      "breakParent": {
        "type": "break-parent"
      },
      "trim": {
        "type": "trim"
      },
      "hardlineWithoutBreakParent": {
        "type": "line",
        "hard": true
      },
      "literallineWithoutBreakParent": {
        "type": "line",
        "hard": true,
        "literal": true
      }
    },
    "printer": {},
    "utils": {},
    "debug": {}
  },
  "version": "2.8.8",
  "util": {},
  "__internal": {
    "errors": {},
    "coreOptions": {
      "CATEGORY_CONFIG": "Config",
      "CATEGORY_EDITOR": "Editor",
      "CATEGORY_FORMAT": "Format",
      "CATEGORY_OTHER": "Other",
      "CATEGORY_OUTPUT": "Output",
      "CATEGORY_GLOBAL": "Global",
      "CATEGORY_SPECIAL": "Special",
      "options": {
        "cursorOffset": {
          "since": "1.4.0",
          "category": "Special",
          "type": "int",
          "default": -1,
          "range": {
            "start": -1,
            "end": null,
            "step": 1
          },
          "description": "Print (to stderr) where a cursor at the given position would move to after formatting.\nThis option cannot be used with --range-start and --range-end.",
          "cliCategory": "Editor"
        },
        "endOfLine": {
          "since": "1.15.0",
          "category": "Global",
          "type": "choice",
          "default": [
            {
              "since": "1.15.0",
              "value": "auto"
            },
            {
              "since": "2.0.0",
              "value": "lf"
            }
          ],
          "description": "Which end of line characters to apply.",
          "choices": [
            {
              "value": "lf",
              "description": "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
            },
            {
              "value": "crlf",
              "description": "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
            },
            {
              "value": "cr",
              "description": "Carriage Return character only (\\r), used very rarely"
            },
            {
              "value": "auto",
              "description": "Maintain existing\n(mixed values within one file are normalised by looking at what's used after the first line)"
            }
          ]
        },
        "filepath": {
          "since": "1.4.0",
          "category": "Special",
          "type": "path",
          "description": "Specify the input filepath. This will be used to do parser inference.",
          "cliName": "stdin-filepath",
          "cliCategory": "Other",
          "cliDescription": "Path to the file to pretend that stdin comes from."
        },
        "insertPragma": {
          "since": "1.8.0",
          "category": "Special",
          "type": "boolean",
          "default": false,
          "description": "Insert @format pragma into file's first docblock comment.",
          "cliCategory": "Other"
        },
        "parser": {
          "since": "0.0.10",
          "category": "Global",
          "type": "choice",
          "default": [
            {
              "since": "0.0.10",
              "value": "babylon"
            },
            {
              "since": "1.13.0"
            }
          ],
          "description": "Which parser to use.",
          "choices": [
            {
              "value": "flow",
              "description": "Flow"
            },
            {
              "value": "babel",
              "since": "1.16.0",
              "description": "JavaScript"
            },
            {
              "value": "babel-flow",
              "since": "1.16.0",
              "description": "Flow"
            },
            {
              "value": "babel-ts",
              "since": "2.0.0",
              "description": "TypeScript"
            },
            {
              "value": "typescript",
              "since": "1.4.0",
              "description": "TypeScript"
            },
            {
              "value": "acorn",
              "since": "2.6.0",
              "description": "JavaScript"
            },
            {
              "value": "espree",
              "since": "2.2.0",
              "description": "JavaScript"
            },
            {
              "value": "meriyah",
              "since": "2.2.0",
              "description": "JavaScript"
            },
            {
              "value": "css",
              "since": "1.7.1",
              "description": "CSS"
            },
            {
              "value": "less",
              "since": "1.7.1",
              "description": "Less"
            },
            {
              "value": "scss",
              "since": "1.7.1",
              "description": "SCSS"
            },
            {
              "value": "json",
              "since": "1.5.0",
              "description": "JSON"
            },
            {
              "value": "json5",
              "since": "1.13.0",
              "description": "JSON5"
            },
            {
              "value": "json-stringify",
              "since": "1.13.0",
              "description": "JSON.stringify"
            },
            {
              "value": "graphql",
              "since": "1.5.0",
              "description": "GraphQL"
            },
            {
              "value": "markdown",
              "since": "1.8.0",
              "description": "Markdown"
            },
            {
              "value": "mdx",
              "since": "1.15.0",
              "description": "MDX"
            },
            {
              "value": "vue",
              "since": "1.10.0",
              "description": "Vue"
            },
            {
              "value": "yaml",
              "since": "1.14.0",
              "description": "YAML"
            },
            {
              "value": "glimmer",
              "since": "2.3.0",
              "description": "Ember / Handlebars"
            },
            {
              "value": "html",
              "since": "1.15.0",
              "description": "HTML"
            },
            {
              "value": "angular",
              "since": "1.15.0",
              "description": "Angular"
            },
            {
              "value": "lwc",
              "since": "1.17.0",
              "description": "Lightning Web Components"
            }
          ]
        },
        "plugins": {
          "since": "1.10.0",
          "type": "path",
          "array": true,
          "default": [
            {
              "value": []
            }
          ],
          "category": "Global",
          "description": "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
          "cliName": "plugin",
          "cliCategory": "Config"
        },
        "pluginSearchDirs": {
          "since": "1.13.0",
          "type": "path",
          "array": true,
          "default": [
            {
              "value": []
            }
          ],
          "category": "Global",
          "description": "Custom directory that contains prettier plugins in node_modules subdirectory.\nOverrides default behavior when plugins are searched relatively to the location of Prettier.\nMultiple values are accepted.",
          "cliName": "plugin-search-dir",
          "cliCategory": "Config"
        },
        "printWidth": {
          "since": "0.0.0",
          "category": "Global",
          "type": "int",
          "default": 80,
          "description": "The line length where Prettier will try wrap.",
          "range": {
            "start": 0,
            "end": null,
            "step": 1
          }
        },
        "rangeEnd": {
          "since": "1.4.0",
          "category": "Special",
          "type": "int",
          "default": null,
          "range": {
            "start": 0,
            "end": null,
            "step": 1
          },
          "description": "Format code ending at a given character offset (exclusive).\nThe range will extend forwards to the end of the selected statement.\nThis option cannot be used with --cursor-offset.",
          "cliCategory": "Editor"
        },
        "rangeStart": {
          "since": "1.4.0",
          "category": "Special",
          "type": "int",
          "default": 0,
          "range": {
            "start": 0,
            "end": null,
            "step": 1
          },
          "description": "Format code starting at a given character offset.\nThe range will extend backwards to the start of the first line containing the selected statement.\nThis option cannot be used with --cursor-offset.",
          "cliCategory": "Editor"
        },
        "requirePragma": {
          "since": "1.7.0",
          "category": "Special",
          "type": "boolean",
          "default": false,
          "description": "Require either '@prettier' or '@format' to be present in the file's first docblock comment\nin order for it to be formatted.",
          "cliCategory": "Other"
        },
        "tabWidth": {
          "type": "int",
          "category": "Global",
          "default": 2,
          "description": "Number of spaces per indentation level.",
          "range": {
            "start": 0,
            "end": null,
            "step": 1
          }
        },
        "useTabs": {
          "since": "1.0.0",
          "category": "Global",
          "type": "boolean",
          "default": false,
          "description": "Indent with tabs instead of spaces."
        },
        "embeddedLanguageFormatting": {
          "since": "2.1.0",
          "category": "Global",
          "type": "choice",
          "default": [
            {
              "since": "2.1.0",
              "value": "auto"
            }
          ],
          "description": "Control how Prettier formats quoted code embedded in the file.",
          "choices": [
            {
              "value": "auto",
              "description": "Format embedded code if Prettier can automatically identify it."
            },
            {
              "value": "off",
              "description": "Never automatically format embedded code."
            }
          ]
        }
      }
    },
    "optionsModule": {
      "hiddenDefaults": {
        "astFormat": "estree",
        "printer": {},
        "locStart": null,
        "locEnd": null
      }
    },
    "optionsNormalizer": {},
    "utils": {}
  },
  "__debug": {}
}
["INFO" - 1:55:26 PM] Using ignore file (if present) at c:\Users\hamid\Documents\web\.prettierignore
["INFO" - 1:55:26 PM] File Info:
{
  "ignored": false,
  "inferredParser": "html"
}
["INFO" - 1:55:26 PM] No local configuration (i.e. .prettierrc or .editorconfig) detected, falling back to VS Code configuration
["INFO" - 1:55:26 PM] Prettier Options:
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "singleAttributePerLine": false,
  "bracketSameLine": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "embeddedLanguageFormatting": "auto",
  "vueIndentScriptAndStyle": false,
  "filepath": "c:\\Users\\hamid\\Documents\\web\\پروژه پایانی\\site.html",
  "parser": "html"
}
["ERROR" - 1:55:27 PM] Error formatting document.
["ERROR" - 1:55:27 PM] Unexpected closing tag "head". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags (178:1)
  176 |             </div>
  177 |             
> 178 | </head>
      | ^^^^^^^
  179 | </body>
  180 | </html>
  181 |
SyntaxError: Unexpected closing tag "head". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags (178:1)
  176 |             </div>
  177 |             
> 178 | </head>
      | ^^^^^^^
  179 | </body>
  180 | </html>
  181 |
	at u (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\parser-html.js:4:2233)
	at oc (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\parser-html.js:36:6390)
	at Ns (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\parser-html.js:36:7894)
	at Object.parse (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\parser-html.js:36:8658)
	at Object.parse (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\index.js:7515:23)
	at coreFormat (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\index.js:8829:18)
	at formatWithCursor2 (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\index.js:9021:18)
	at c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\index.js:38183:12
	at Object.format (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\node_modules\prettier\index.js:38197:12)
	at t.default.format (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\dist\extension.js:1:16318)
	at async t.PrettierEditProvider.provideEdits (c:\Users\hamid\.vscode\extensions\esbenp.prettier-vscode-10.4.0\dist\extension.js:1:12876)
	at async F.provideDocumentFormattingEdits (c:\Users\hamid\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\workbench\api\node\extensionHostProcess.js:153:107334)
["INFO" - 1:55:27 PM] Formatting completed in 209ms.
