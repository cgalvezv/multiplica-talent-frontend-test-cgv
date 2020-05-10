// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const URL = {
  COLOR_LIST_BASE_API: 'https://reqres.in/api/colors'
};

export const TEXTS = {
  PLACEHOLDER_FILTER_INPUT: 'Ex. sand dollar, or #DECDBE or another params',
  REPLACE_KEY: '{{color_name}}',
  SNACKBAR_MSG: 'Color {{color_name}} copied in clipboard!',
  COLOR_TOOLTIP_MSG: 'Click the circle to copy the {{color_name}} color code',
  COLOR_FOOTER_MSG: 'Click the circle to copy the color code',
  TOOLTIP_MSG: 'Click to copy the color code'
};

export const PAGINATION = {
  DEFAULT_INIT_PAGE: 1,
  DEFAULT_ELEMENT_PER_PAGE: 9,
  MAX_ELEMENT_PER_PAGE: 20
};

export const DATA_TABLE = {
  COLUMNS: [
    'color_button',
    'color_name',
    'color_code',
    'year',
    'pantone'
  ]
};

export const MOBILE = {
  XS_SCREEN: 'xs',
  SM_SCREEN: 'sm'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
