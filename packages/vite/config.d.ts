/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PlatformaticViteStackable {
  $schema?: string;
  server?: {
    hostname?: string;
    port?: number | string;
    pluginTimeout?: number;
    healthCheck?:
      | boolean
      | {
          enabled?: boolean;
          interval?: number;
          [k: string]: unknown;
        };
    ignoreTrailingSlash?: boolean;
    ignoreDuplicateSlashes?: boolean;
    connectionTimeout?: number;
    keepAliveTimeout?: number;
    maxRequestsPerSocket?: number;
    forceCloseConnections?: boolean | string;
    requestTimeout?: number;
    bodyLimit?: number;
    maxParamLength?: number;
    disableRequestLogging?: boolean;
    exposeHeadRoutes?: boolean;
    logger?:
      | boolean
      | {
          level?: string;
          transport?:
            | {
                target?: string;
                options?: {
                  [k: string]: unknown;
                };
              }
            | {
                targets?: {
                  target?: string;
                  options?: {
                    [k: string]: unknown;
                  };
                  level?: string;
                  additionalProperties?: never;
                  [k: string]: unknown;
                }[];
                options?: {
                  [k: string]: unknown;
                };
              };
          pipeline?: {
            target?: string;
            options?: {
              [k: string]: unknown;
            };
          };
          [k: string]: unknown;
        };
    loggerInstance?: {
      [k: string]: unknown;
    };
    serializerOpts?: {
      schema?: {
        [k: string]: unknown;
      };
      ajv?: {
        [k: string]: unknown;
      };
      rounding?: "floor" | "ceil" | "round" | "trunc";
      debugMode?: boolean;
      mode?: "debug" | "standalone";
      largeArraySize?: number | string;
      largeArrayMechanism?: "default" | "json-stringify";
      [k: string]: unknown;
    };
    caseSensitive?: boolean;
    requestIdHeader?: string | false;
    requestIdLogLabel?: string;
    jsonShorthand?: boolean;
    trustProxy?: boolean | string | string[] | number;
    http2?: boolean;
    https?: {
      allowHTTP1?: boolean;
      key:
        | string
        | {
            path?: string;
          }
        | (
            | string
            | {
                path?: string;
              }
          )[];
      cert:
        | string
        | {
            path?: string;
          }
        | (
            | string
            | {
                path?: string;
              }
          )[];
      requestCert?: boolean;
      rejectUnauthorized?: boolean;
    };
    cors?: {
      origin?:
        | boolean
        | string
        | (
            | string
            | {
                regexp: string;
                [k: string]: unknown;
              }
          )[]
        | {
            regexp: string;
            [k: string]: unknown;
          };
      methods?: string[];
      /**
       * Comma separated string of allowed headers.
       */
      allowedHeaders?: string;
      exposedHeaders?: string[] | string;
      credentials?: boolean;
      maxAge?: number;
      preflightContinue?: boolean;
      optionsSuccessStatus?: number;
      preflight?: boolean;
      strictPreflight?: boolean;
      hideOptionsRoute?: boolean;
    };
  };
  watch?:
    | {
        enabled?: boolean | string;
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
        ignore?: string[];
      }
    | boolean
    | string;
  application?: {
    basePath?: string;
    outputDirectory?: string;
    include?: string[];
    commands?: {
      install?: string;
      build?: string;
      development?: string;
      production?: string;
    };
  };
  vite?: {
    configFile?: string | boolean;
    devServer?: {
      strict?: boolean;
    };
    ssr?:
      | {
          enabled?: boolean;
          entrypoint: string;
          clientDirectory?: string;
          serverDirectory?: string;
        }
      | boolean;
  };
}
