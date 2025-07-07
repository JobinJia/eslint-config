import type { OptionsOverrides, OptionsStylistic, TypedFlatConfigItem } from '../types'
import { pluginAntfu, pluginImportLite } from '../plugins'

export async function imports(options: OptionsOverrides & OptionsStylistic = {}): Promise<TypedFlatConfigItem[]> {
  const {
    overrides = {},
    stylistic = true,
  } = options

  return [
    {
      name: 'jobin/imports/rules',
      plugins: {
        import: pluginImportLite,
        jobin: pluginAntfu,
      },
      rules: {
        'import/consistent-type-specifier-style': ['error', 'top-level'],
        'import/first': 'error',
        'import/no-duplicates': 'error',

        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'jobin/import-dedupe': 'error',
        'jobin/no-import-dist': 'error',
        'jobin/no-import-node-modules-by-path': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {},

        ...overrides,
      },
    },
  ]
}
