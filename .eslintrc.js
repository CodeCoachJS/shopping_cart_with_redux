const MAX_ALLOWED_COMPLEXITY = 10;

module.exports = {
	env: {
		browser: true,
		es2022: true,
	},
	extends: [
		'plugin:unicorn/recommended',
		'plugin:eslint-comments/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],

	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			configFile: './babel.config.js',
		},
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	plugins: [
		'prettier',
		'unicorn',
		'eslint-comments',
		'jest',
		'react',
		'react-hooks',
		'jsx-a11y',
		'react-perf',
		'simple-import-sort',
		'postcss-modules',
		'import',
		'jest-formatting',
		'jsdoc',
		'testing-library',
	],
	root: true,
	rules: {
		'no-param-reassign': ['error', { props: false }],
		'unicorn/no-null': 'off',
		'unicorn/template-indent': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
			},
		],
		'no-void': ['error', { allowAsStatement: true }],
		'no-magic-numbers': [
			'error',
			{
				ignore: [0, 1, -1],
				ignoreDefaultValues: true,
			},
		],
		'no-console': 'off',
		'jest/prefer-expect-assertions': 'off',
		'jest/no-conditional-expect': 'off',
		'jest/expect-expect': 'off',
		'jest/prefer-strict-equal': 'off',
		'unicorn/prefer-spread': 'off',
		'no-use-before-define': 'off',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Node.js builtins.
					// eslint-disable-next-line global-require
					[`^(${require('module').builtinModules.join('|')})(/|$)`],
					// Packages.
					['^(?!@magento/)(\\w|.)[^./]'],
					// Magento packages.
					['^@magento/(\\w|.)[^./]'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'import/order': 'off',
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
				},
			},
		],
		'react-perf/jsx-no-new-object-as-prop': 'warn',
		'react-perf/jsx-no-new-array-as-prop': 'warn',
		'react-perf/jsx-no-new-function-as-prop': 'warn',
		'react-perf/jsx-no-jsx-as-prop': 'warn',
		'react/react-in-jsx-scope': 'error',
		'unicorn/prefer-node-protocol': 'off',
		'unicorn/no-unsafe-regex': 'warn',
		'jest/require-hook': 'off',
		'prettier/prettier': ['error', { printWidth: 80 }],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			// {
			//     selector: 'ForOfStatement',
			//     message:
			//         'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
			// },
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				allowList: {
					props: true,
				},
			},
		],
		camelcase: 'off',
		'no-underscore-dangle': ['error', { allow: ['__type', '__typename'] }],
		'no-nested-ternary': 'error',
		complexity: ['error', MAX_ALLOWED_COMPLEXITY],
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'react/no-multi-comp': 'error',
		'react/no-unstable-nested-components': 'error',
		'react/sort-prop-types': 'error',
		'unicorn/prefer-at': ['error', { checkAllIndexAccess: true }],
		'jsdoc/check-param-names': 'off',
		'jsdoc/no-undefined-types': [
			'warn',
			{
				definedTypes: ['RequestInit', 'ScrollIntoViewOptions'],
			},
		],
		curly: 'error',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{ aspects: ['noHref', 'invalidHref'] },
		],
	},
	settings: {
		jsdoc: {
			mode: 'typescript',
		},
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Link',
			{ name: 'Link', linkAttribute: 'to' },
		],
		'postcss-modules': {
			include: /\.module\.css$/,
		},
		react: {
			version: 'detect',
		},
	},
};
