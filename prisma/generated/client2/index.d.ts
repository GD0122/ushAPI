
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Userstatus
 * 
 */
export type Userstatus = $Result.DefaultSelection<Prisma.$UserstatusPayload>
/**
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model Gambar
 * 
 */
export type Gambar = $Result.DefaultSelection<Prisma.$GambarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  nonActive: 'nonActive',
  Active: 'Active',
  Banned: 'Banned'
};

export type Status = (typeof Status)[keyof typeof Status]


export const StatusBrng: {
  Tersedia: 'Tersedia',
  Habis: 'Habis'
};

export type StatusBrng = (typeof StatusBrng)[keyof typeof StatusBrng]


export const SatuanJml: {
  Pcs: 'Pcs',
  Pack: 'Pack'
};

export type SatuanJml = (typeof SatuanJml)[keyof typeof SatuanJml]


export const SatuanBrt: {
  Kg: 'Kg',
  Gr: 'Gr'
};

export type SatuanBrt = (typeof SatuanBrt)[keyof typeof SatuanBrt]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type StatusBrng = $Enums.StatusBrng

export const StatusBrng: typeof $Enums.StatusBrng

export type SatuanJml = $Enums.SatuanJml

export const SatuanJml: typeof $Enums.SatuanJml

export type SatuanBrt = $Enums.SatuanBrt

export const SatuanBrt: typeof $Enums.SatuanBrt

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userstatus`: Exposes CRUD operations for the **Userstatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userstatuses
    * const userstatuses = await prisma.userstatus.findMany()
    * ```
    */
  get userstatus(): Prisma.UserstatusDelegate<ExtArgs>;

  /**
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs>;

  /**
   * `prisma.gambar`: Exposes CRUD operations for the **Gambar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gambars
    * const gambars = await prisma.gambar.findMany()
    * ```
    */
  get gambar(): Prisma.GambarDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Userstatus: 'Userstatus',
    Barang: 'Barang',
    Gambar: 'Gambar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userstatus" | "barang" | "gambar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Userstatus: {
        payload: Prisma.$UserstatusPayload<ExtArgs>
        fields: Prisma.UserstatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserstatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserstatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          findFirst: {
            args: Prisma.UserstatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserstatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          findMany: {
            args: Prisma.UserstatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>[]
          }
          create: {
            args: Prisma.UserstatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          createMany: {
            args: Prisma.UserstatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserstatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>[]
          }
          delete: {
            args: Prisma.UserstatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          update: {
            args: Prisma.UserstatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          deleteMany: {
            args: Prisma.UserstatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserstatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserstatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserstatusPayload>
          }
          aggregate: {
            args: Prisma.UserstatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserstatus>
          }
          groupBy: {
            args: Prisma.UserstatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserstatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserstatusCountArgs<ExtArgs>
            result: $Utils.Optional<UserstatusCountAggregateOutputType> | number
          }
        }
      }
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      Gambar: {
        payload: Prisma.$GambarPayload<ExtArgs>
        fields: Prisma.GambarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GambarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GambarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findFirst: {
            args: Prisma.GambarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GambarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          findMany: {
            args: Prisma.GambarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          create: {
            args: Prisma.GambarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          createMany: {
            args: Prisma.GambarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GambarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>[]
          }
          delete: {
            args: Prisma.GambarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          update: {
            args: Prisma.GambarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          deleteMany: {
            args: Prisma.GambarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GambarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GambarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GambarPayload>
          }
          aggregate: {
            args: Prisma.GambarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGambar>
          }
          groupBy: {
            args: Prisma.GambarGroupByArgs<ExtArgs>
            result: $Utils.Optional<GambarGroupByOutputType>[]
          }
          count: {
            args: Prisma.GambarCountArgs<ExtArgs>
            result: $Utils.Optional<GambarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    gambar: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | BarangCountOutputTypeCountGambarArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountGambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Userstatus
   */

  export type AggregateUserstatus = {
    _count: UserstatusCountAggregateOutputType | null
    _avg: UserstatusAvgAggregateOutputType | null
    _sum: UserstatusSumAggregateOutputType | null
    _min: UserstatusMinAggregateOutputType | null
    _max: UserstatusMaxAggregateOutputType | null
  }

  export type UserstatusAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserstatusSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserstatusMinAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    refresh_token: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserstatusMaxAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    refresh_token: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserstatusCountAggregateOutputType = {
    id: number
    status: number
    refresh_token: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserstatusAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserstatusSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserstatusMinAggregateInputType = {
    id?: true
    status?: true
    refresh_token?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserstatusMaxAggregateInputType = {
    id?: true
    status?: true
    refresh_token?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserstatusCountAggregateInputType = {
    id?: true
    status?: true
    refresh_token?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserstatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Userstatus to aggregate.
     */
    where?: UserstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Userstatuses to fetch.
     */
    orderBy?: UserstatusOrderByWithRelationInput | UserstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Userstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Userstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Userstatuses
    **/
    _count?: true | UserstatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserstatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserstatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserstatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserstatusMaxAggregateInputType
  }

  export type GetUserstatusAggregateType<T extends UserstatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserstatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserstatus[P]>
      : GetScalarType<T[P], AggregateUserstatus[P]>
  }




  export type UserstatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserstatusWhereInput
    orderBy?: UserstatusOrderByWithAggregationInput | UserstatusOrderByWithAggregationInput[]
    by: UserstatusScalarFieldEnum[] | UserstatusScalarFieldEnum
    having?: UserstatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserstatusCountAggregateInputType | true
    _avg?: UserstatusAvgAggregateInputType
    _sum?: UserstatusSumAggregateInputType
    _min?: UserstatusMinAggregateInputType
    _max?: UserstatusMaxAggregateInputType
  }

  export type UserstatusGroupByOutputType = {
    id: number
    status: $Enums.Status
    refresh_token: string | null
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserstatusCountAggregateOutputType | null
    _avg: UserstatusAvgAggregateOutputType | null
    _sum: UserstatusSumAggregateOutputType | null
    _min: UserstatusMinAggregateOutputType | null
    _max: UserstatusMaxAggregateOutputType | null
  }

  type GetUserstatusGroupByPayload<T extends UserstatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserstatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserstatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserstatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserstatusGroupByOutputType[P]>
        }
      >
    >


  export type UserstatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    refresh_token?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userstatus"]>

  export type UserstatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    refresh_token?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userstatus"]>

  export type UserstatusSelectScalar = {
    id?: boolean
    status?: boolean
    refresh_token?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserstatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Userstatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.Status
      refresh_token: string | null
      userId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userstatus"]>
    composites: {}
  }

  type UserstatusGetPayload<S extends boolean | null | undefined | UserstatusDefaultArgs> = $Result.GetResult<Prisma.$UserstatusPayload, S>

  type UserstatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserstatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserstatusCountAggregateInputType | true
    }

  export interface UserstatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Userstatus'], meta: { name: 'Userstatus' } }
    /**
     * Find zero or one Userstatus that matches the filter.
     * @param {UserstatusFindUniqueArgs} args - Arguments to find a Userstatus
     * @example
     * // Get one Userstatus
     * const userstatus = await prisma.userstatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserstatusFindUniqueArgs>(args: SelectSubset<T, UserstatusFindUniqueArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Userstatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserstatusFindUniqueOrThrowArgs} args - Arguments to find a Userstatus
     * @example
     * // Get one Userstatus
     * const userstatus = await prisma.userstatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserstatusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserstatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Userstatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusFindFirstArgs} args - Arguments to find a Userstatus
     * @example
     * // Get one Userstatus
     * const userstatus = await prisma.userstatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserstatusFindFirstArgs>(args?: SelectSubset<T, UserstatusFindFirstArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Userstatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusFindFirstOrThrowArgs} args - Arguments to find a Userstatus
     * @example
     * // Get one Userstatus
     * const userstatus = await prisma.userstatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserstatusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserstatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Userstatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userstatuses
     * const userstatuses = await prisma.userstatus.findMany()
     * 
     * // Get first 10 Userstatuses
     * const userstatuses = await prisma.userstatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userstatusWithIdOnly = await prisma.userstatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserstatusFindManyArgs>(args?: SelectSubset<T, UserstatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Userstatus.
     * @param {UserstatusCreateArgs} args - Arguments to create a Userstatus.
     * @example
     * // Create one Userstatus
     * const Userstatus = await prisma.userstatus.create({
     *   data: {
     *     // ... data to create a Userstatus
     *   }
     * })
     * 
     */
    create<T extends UserstatusCreateArgs>(args: SelectSubset<T, UserstatusCreateArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Userstatuses.
     * @param {UserstatusCreateManyArgs} args - Arguments to create many Userstatuses.
     * @example
     * // Create many Userstatuses
     * const userstatus = await prisma.userstatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserstatusCreateManyArgs>(args?: SelectSubset<T, UserstatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Userstatuses and returns the data saved in the database.
     * @param {UserstatusCreateManyAndReturnArgs} args - Arguments to create many Userstatuses.
     * @example
     * // Create many Userstatuses
     * const userstatus = await prisma.userstatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Userstatuses and only return the `id`
     * const userstatusWithIdOnly = await prisma.userstatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserstatusCreateManyAndReturnArgs>(args?: SelectSubset<T, UserstatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Userstatus.
     * @param {UserstatusDeleteArgs} args - Arguments to delete one Userstatus.
     * @example
     * // Delete one Userstatus
     * const Userstatus = await prisma.userstatus.delete({
     *   where: {
     *     // ... filter to delete one Userstatus
     *   }
     * })
     * 
     */
    delete<T extends UserstatusDeleteArgs>(args: SelectSubset<T, UserstatusDeleteArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Userstatus.
     * @param {UserstatusUpdateArgs} args - Arguments to update one Userstatus.
     * @example
     * // Update one Userstatus
     * const userstatus = await prisma.userstatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserstatusUpdateArgs>(args: SelectSubset<T, UserstatusUpdateArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Userstatuses.
     * @param {UserstatusDeleteManyArgs} args - Arguments to filter Userstatuses to delete.
     * @example
     * // Delete a few Userstatuses
     * const { count } = await prisma.userstatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserstatusDeleteManyArgs>(args?: SelectSubset<T, UserstatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userstatuses
     * const userstatus = await prisma.userstatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserstatusUpdateManyArgs>(args: SelectSubset<T, UserstatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userstatus.
     * @param {UserstatusUpsertArgs} args - Arguments to update or create a Userstatus.
     * @example
     * // Update or create a Userstatus
     * const userstatus = await prisma.userstatus.upsert({
     *   create: {
     *     // ... data to create a Userstatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userstatus we want to update
     *   }
     * })
     */
    upsert<T extends UserstatusUpsertArgs>(args: SelectSubset<T, UserstatusUpsertArgs<ExtArgs>>): Prisma__UserstatusClient<$Result.GetResult<Prisma.$UserstatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Userstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusCountArgs} args - Arguments to filter Userstatuses to count.
     * @example
     * // Count the number of Userstatuses
     * const count = await prisma.userstatus.count({
     *   where: {
     *     // ... the filter for the Userstatuses we want to count
     *   }
     * })
    **/
    count<T extends UserstatusCountArgs>(
      args?: Subset<T, UserstatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserstatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserstatusAggregateArgs>(args: Subset<T, UserstatusAggregateArgs>): Prisma.PrismaPromise<GetUserstatusAggregateType<T>>

    /**
     * Group by Userstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserstatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserstatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserstatusGroupByArgs['orderBy'] }
        : { orderBy?: UserstatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserstatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserstatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Userstatus model
   */
  readonly fields: UserstatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Userstatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserstatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Userstatus model
   */ 
  interface UserstatusFieldRefs {
    readonly id: FieldRef<"Userstatus", 'Int'>
    readonly status: FieldRef<"Userstatus", 'Status'>
    readonly refresh_token: FieldRef<"Userstatus", 'String'>
    readonly userId: FieldRef<"Userstatus", 'Int'>
    readonly createdAt: FieldRef<"Userstatus", 'DateTime'>
    readonly updatedAt: FieldRef<"Userstatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Userstatus findUnique
   */
  export type UserstatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter, which Userstatus to fetch.
     */
    where: UserstatusWhereUniqueInput
  }

  /**
   * Userstatus findUniqueOrThrow
   */
  export type UserstatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter, which Userstatus to fetch.
     */
    where: UserstatusWhereUniqueInput
  }

  /**
   * Userstatus findFirst
   */
  export type UserstatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter, which Userstatus to fetch.
     */
    where?: UserstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Userstatuses to fetch.
     */
    orderBy?: UserstatusOrderByWithRelationInput | UserstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Userstatuses.
     */
    cursor?: UserstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Userstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Userstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Userstatuses.
     */
    distinct?: UserstatusScalarFieldEnum | UserstatusScalarFieldEnum[]
  }

  /**
   * Userstatus findFirstOrThrow
   */
  export type UserstatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter, which Userstatus to fetch.
     */
    where?: UserstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Userstatuses to fetch.
     */
    orderBy?: UserstatusOrderByWithRelationInput | UserstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Userstatuses.
     */
    cursor?: UserstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Userstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Userstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Userstatuses.
     */
    distinct?: UserstatusScalarFieldEnum | UserstatusScalarFieldEnum[]
  }

  /**
   * Userstatus findMany
   */
  export type UserstatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter, which Userstatuses to fetch.
     */
    where?: UserstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Userstatuses to fetch.
     */
    orderBy?: UserstatusOrderByWithRelationInput | UserstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Userstatuses.
     */
    cursor?: UserstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Userstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Userstatuses.
     */
    skip?: number
    distinct?: UserstatusScalarFieldEnum | UserstatusScalarFieldEnum[]
  }

  /**
   * Userstatus create
   */
  export type UserstatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * The data needed to create a Userstatus.
     */
    data: XOR<UserstatusCreateInput, UserstatusUncheckedCreateInput>
  }

  /**
   * Userstatus createMany
   */
  export type UserstatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Userstatuses.
     */
    data: UserstatusCreateManyInput | UserstatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Userstatus createManyAndReturn
   */
  export type UserstatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Userstatuses.
     */
    data: UserstatusCreateManyInput | UserstatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Userstatus update
   */
  export type UserstatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * The data needed to update a Userstatus.
     */
    data: XOR<UserstatusUpdateInput, UserstatusUncheckedUpdateInput>
    /**
     * Choose, which Userstatus to update.
     */
    where: UserstatusWhereUniqueInput
  }

  /**
   * Userstatus updateMany
   */
  export type UserstatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Userstatuses.
     */
    data: XOR<UserstatusUpdateManyMutationInput, UserstatusUncheckedUpdateManyInput>
    /**
     * Filter which Userstatuses to update
     */
    where?: UserstatusWhereInput
    limit?: number
  }

  /**
   * Userstatus upsert
   */
  export type UserstatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * The filter to search for the Userstatus to update in case it exists.
     */
    where: UserstatusWhereUniqueInput
    /**
     * In case the Userstatus found by the `where` argument doesn't exist, create a new Userstatus with this data.
     */
    create: XOR<UserstatusCreateInput, UserstatusUncheckedCreateInput>
    /**
     * In case the Userstatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserstatusUpdateInput, UserstatusUncheckedUpdateInput>
  }

  /**
   * Userstatus delete
   */
  export type UserstatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
    /**
     * Filter which Userstatus to delete.
     */
    where: UserstatusWhereUniqueInput
  }

  /**
   * Userstatus deleteMany
   */
  export type UserstatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Userstatuses to delete
     */
    where?: UserstatusWhereInput
    limit?: number
  }

  /**
   * Userstatus without action
   */
  export type UserstatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Userstatus
     */
    select?: UserstatusSelect<ExtArgs> | null
  }


  /**
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    satuan_jml: number | null
    satuan_berat: number | null
  }

  export type BarangSumAggregateOutputType = {
    id: number | null
    harga: number | null
    satuan_jml: number | null
    satuan_berat: number | null
  }

  export type BarangMinAggregateOutputType = {
    id: number | null
    author: string | null
    nama: string | null
    deskripsi: string | null
    status: $Enums.StatusBrng | null
    harga: number | null
    jenis: string | null
    satuan_jml: number | null
    type_jml: $Enums.SatuanJml | null
    satuan_berat: number | null
    type_brt: $Enums.SatuanBrt | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangMaxAggregateOutputType = {
    id: number | null
    author: string | null
    nama: string | null
    deskripsi: string | null
    status: $Enums.StatusBrng | null
    harga: number | null
    jenis: string | null
    satuan_jml: number | null
    type_jml: $Enums.SatuanJml | null
    satuan_berat: number | null
    type_brt: $Enums.SatuanBrt | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangCountAggregateOutputType = {
    id: number
    author: number
    nama: number
    deskripsi: number
    status: number
    harga: number
    jenis: number
    satuan_jml: number
    type_jml: number
    satuan_berat: number
    type_brt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    id?: true
    harga?: true
    satuan_jml?: true
    satuan_berat?: true
  }

  export type BarangSumAggregateInputType = {
    id?: true
    harga?: true
    satuan_jml?: true
    satuan_berat?: true
  }

  export type BarangMinAggregateInputType = {
    id?: true
    author?: true
    nama?: true
    deskripsi?: true
    status?: true
    harga?: true
    jenis?: true
    satuan_jml?: true
    type_jml?: true
    satuan_berat?: true
    type_brt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangMaxAggregateInputType = {
    id?: true
    author?: true
    nama?: true
    deskripsi?: true
    status?: true
    harga?: true
    jenis?: true
    satuan_jml?: true
    type_jml?: true
    satuan_berat?: true
    type_brt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangCountAggregateInputType = {
    id?: true
    author?: true
    nama?: true
    deskripsi?: true
    status?: true
    harga?: true
    jenis?: true
    satuan_jml?: true
    type_jml?: true
    satuan_berat?: true
    type_brt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id: number
    author: string | null
    nama: string | null
    deskripsi: string | null
    status: $Enums.StatusBrng
    harga: number | null
    jenis: string | null
    satuan_jml: number
    type_jml: $Enums.SatuanJml
    satuan_berat: number
    type_brt: $Enums.SatuanBrt
    createdAt: Date
    updatedAt: Date
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    nama?: boolean
    deskripsi?: boolean
    status?: boolean
    harga?: boolean
    jenis?: boolean
    satuan_jml?: boolean
    type_jml?: boolean
    satuan_berat?: boolean
    type_brt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gambar?: boolean | Barang$gambarArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    nama?: boolean
    deskripsi?: boolean
    status?: boolean
    harga?: boolean
    jenis?: boolean
    satuan_jml?: boolean
    type_jml?: boolean
    satuan_berat?: boolean
    type_brt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id?: boolean
    author?: boolean
    nama?: boolean
    deskripsi?: boolean
    status?: boolean
    harga?: boolean
    jenis?: boolean
    satuan_jml?: boolean
    type_jml?: boolean
    satuan_berat?: boolean
    type_brt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gambar?: boolean | Barang$gambarArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      gambar: Prisma.$GambarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      author: string | null
      nama: string | null
      deskripsi: string | null
      status: $Enums.StatusBrng
      harga: number | null
      jenis: string | null
      satuan_jml: number
      type_jml: $Enums.SatuanJml
      satuan_berat: number
      type_brt: $Enums.SatuanBrt
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangFindUniqueArgs>(args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangFindFirstArgs>(args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barangWithIdOnly = await prisma.barang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarangFindManyArgs>(args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends BarangCreateArgs>(args: SelectSubset<T, BarangCreateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Barangs.
     * @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangCreateManyArgs>(args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barangs and returns the data saved in the database.
     * @param {BarangCreateManyAndReturnArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barangs and only return the `id`
     * const barangWithIdOnly = await prisma.barang.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends BarangDeleteArgs>(args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangUpdateArgs>(args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangDeleteManyArgs>(args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangUpdateManyArgs>(args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends BarangUpsertArgs>(args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gambar<T extends Barang$gambarArgs<ExtArgs> = {}>(args?: Subset<T, Barang$gambarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Barang model
   */ 
  interface BarangFieldRefs {
    readonly id: FieldRef<"Barang", 'Int'>
    readonly author: FieldRef<"Barang", 'String'>
    readonly nama: FieldRef<"Barang", 'String'>
    readonly deskripsi: FieldRef<"Barang", 'String'>
    readonly status: FieldRef<"Barang", 'StatusBrng'>
    readonly harga: FieldRef<"Barang", 'Int'>
    readonly jenis: FieldRef<"Barang", 'String'>
    readonly satuan_jml: FieldRef<"Barang", 'Int'>
    readonly type_jml: FieldRef<"Barang", 'SatuanJml'>
    readonly satuan_berat: FieldRef<"Barang", 'Int'>
    readonly type_brt: FieldRef<"Barang", 'SatuanBrt'>
    readonly createdAt: FieldRef<"Barang", 'DateTime'>
    readonly updatedAt: FieldRef<"Barang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }

  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barang createManyAndReturn
   */
  export type BarangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    limit?: number
  }

  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }

  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
    limit?: number
  }

  /**
   * Barang.gambar
   */
  export type Barang$gambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    cursor?: GambarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
  }


  /**
   * Model Gambar
   */

  export type AggregateGambar = {
    _count: GambarCountAggregateOutputType | null
    _avg: GambarAvgAggregateOutputType | null
    _sum: GambarSumAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  export type GambarAvgAggregateOutputType = {
    id: number | null
    barangId: number | null
  }

  export type GambarSumAggregateOutputType = {
    id: number | null
    barangId: number | null
  }

  export type GambarMinAggregateOutputType = {
    id: number | null
    url: string | null
    hashdel: string | null
    barangId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GambarMaxAggregateOutputType = {
    id: number | null
    url: string | null
    hashdel: string | null
    barangId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GambarCountAggregateOutputType = {
    id: number
    url: number
    hashdel: number
    barangId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GambarAvgAggregateInputType = {
    id?: true
    barangId?: true
  }

  export type GambarSumAggregateInputType = {
    id?: true
    barangId?: true
  }

  export type GambarMinAggregateInputType = {
    id?: true
    url?: true
    hashdel?: true
    barangId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GambarMaxAggregateInputType = {
    id?: true
    url?: true
    hashdel?: true
    barangId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GambarCountAggregateInputType = {
    id?: true
    url?: true
    hashdel?: true
    barangId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GambarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambar to aggregate.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gambars
    **/
    _count?: true | GambarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GambarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GambarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GambarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GambarMaxAggregateInputType
  }

  export type GetGambarAggregateType<T extends GambarAggregateArgs> = {
        [P in keyof T & keyof AggregateGambar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGambar[P]>
      : GetScalarType<T[P], AggregateGambar[P]>
  }




  export type GambarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GambarWhereInput
    orderBy?: GambarOrderByWithAggregationInput | GambarOrderByWithAggregationInput[]
    by: GambarScalarFieldEnum[] | GambarScalarFieldEnum
    having?: GambarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GambarCountAggregateInputType | true
    _avg?: GambarAvgAggregateInputType
    _sum?: GambarSumAggregateInputType
    _min?: GambarMinAggregateInputType
    _max?: GambarMaxAggregateInputType
  }

  export type GambarGroupByOutputType = {
    id: number
    url: string | null
    hashdel: string | null
    barangId: number
    createdAt: Date
    updatedAt: Date
    _count: GambarCountAggregateOutputType | null
    _avg: GambarAvgAggregateOutputType | null
    _sum: GambarSumAggregateOutputType | null
    _min: GambarMinAggregateOutputType | null
    _max: GambarMaxAggregateOutputType | null
  }

  type GetGambarGroupByPayload<T extends GambarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GambarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GambarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GambarGroupByOutputType[P]>
            : GetScalarType<T[P], GambarGroupByOutputType[P]>
        }
      >
    >


  export type GambarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    hashdel?: boolean
    barangId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    hashdel?: boolean
    barangId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gambar"]>

  export type GambarSelectScalar = {
    id?: boolean
    url?: boolean
    hashdel?: boolean
    barangId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GambarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type GambarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }

  export type $GambarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gambar"
    objects: {
      Barang: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string | null
      hashdel: string | null
      barangId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gambar"]>
    composites: {}
  }

  type GambarGetPayload<S extends boolean | null | undefined | GambarDefaultArgs> = $Result.GetResult<Prisma.$GambarPayload, S>

  type GambarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GambarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GambarCountAggregateInputType | true
    }

  export interface GambarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gambar'], meta: { name: 'Gambar' } }
    /**
     * Find zero or one Gambar that matches the filter.
     * @param {GambarFindUniqueArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GambarFindUniqueArgs>(args: SelectSubset<T, GambarFindUniqueArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gambar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GambarFindUniqueOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GambarFindUniqueOrThrowArgs>(args: SelectSubset<T, GambarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gambar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GambarFindFirstArgs>(args?: SelectSubset<T, GambarFindFirstArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gambar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindFirstOrThrowArgs} args - Arguments to find a Gambar
     * @example
     * // Get one Gambar
     * const gambar = await prisma.gambar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GambarFindFirstOrThrowArgs>(args?: SelectSubset<T, GambarFindFirstOrThrowArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gambars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gambars
     * const gambars = await prisma.gambar.findMany()
     * 
     * // Get first 10 Gambars
     * const gambars = await prisma.gambar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gambarWithIdOnly = await prisma.gambar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GambarFindManyArgs>(args?: SelectSubset<T, GambarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gambar.
     * @param {GambarCreateArgs} args - Arguments to create a Gambar.
     * @example
     * // Create one Gambar
     * const Gambar = await prisma.gambar.create({
     *   data: {
     *     // ... data to create a Gambar
     *   }
     * })
     * 
     */
    create<T extends GambarCreateArgs>(args: SelectSubset<T, GambarCreateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gambars.
     * @param {GambarCreateManyArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GambarCreateManyArgs>(args?: SelectSubset<T, GambarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gambars and returns the data saved in the database.
     * @param {GambarCreateManyAndReturnArgs} args - Arguments to create many Gambars.
     * @example
     * // Create many Gambars
     * const gambar = await prisma.gambar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gambars and only return the `id`
     * const gambarWithIdOnly = await prisma.gambar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GambarCreateManyAndReturnArgs>(args?: SelectSubset<T, GambarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gambar.
     * @param {GambarDeleteArgs} args - Arguments to delete one Gambar.
     * @example
     * // Delete one Gambar
     * const Gambar = await prisma.gambar.delete({
     *   where: {
     *     // ... filter to delete one Gambar
     *   }
     * })
     * 
     */
    delete<T extends GambarDeleteArgs>(args: SelectSubset<T, GambarDeleteArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gambar.
     * @param {GambarUpdateArgs} args - Arguments to update one Gambar.
     * @example
     * // Update one Gambar
     * const gambar = await prisma.gambar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GambarUpdateArgs>(args: SelectSubset<T, GambarUpdateArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gambars.
     * @param {GambarDeleteManyArgs} args - Arguments to filter Gambars to delete.
     * @example
     * // Delete a few Gambars
     * const { count } = await prisma.gambar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GambarDeleteManyArgs>(args?: SelectSubset<T, GambarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gambars
     * const gambar = await prisma.gambar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GambarUpdateManyArgs>(args: SelectSubset<T, GambarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gambar.
     * @param {GambarUpsertArgs} args - Arguments to update or create a Gambar.
     * @example
     * // Update or create a Gambar
     * const gambar = await prisma.gambar.upsert({
     *   create: {
     *     // ... data to create a Gambar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gambar we want to update
     *   }
     * })
     */
    upsert<T extends GambarUpsertArgs>(args: SelectSubset<T, GambarUpsertArgs<ExtArgs>>): Prisma__GambarClient<$Result.GetResult<Prisma.$GambarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gambars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarCountArgs} args - Arguments to filter Gambars to count.
     * @example
     * // Count the number of Gambars
     * const count = await prisma.gambar.count({
     *   where: {
     *     // ... the filter for the Gambars we want to count
     *   }
     * })
    **/
    count<T extends GambarCountArgs>(
      args?: Subset<T, GambarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GambarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GambarAggregateArgs>(args: Subset<T, GambarAggregateArgs>): Prisma.PrismaPromise<GetGambarAggregateType<T>>

    /**
     * Group by Gambar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GambarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GambarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GambarGroupByArgs['orderBy'] }
        : { orderBy?: GambarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GambarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGambarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gambar model
   */
  readonly fields: GambarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gambar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GambarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gambar model
   */ 
  interface GambarFieldRefs {
    readonly id: FieldRef<"Gambar", 'Int'>
    readonly url: FieldRef<"Gambar", 'String'>
    readonly hashdel: FieldRef<"Gambar", 'String'>
    readonly barangId: FieldRef<"Gambar", 'Int'>
    readonly createdAt: FieldRef<"Gambar", 'DateTime'>
    readonly updatedAt: FieldRef<"Gambar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gambar findUnique
   */
  export type GambarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findUniqueOrThrow
   */
  export type GambarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar findFirst
   */
  export type GambarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findFirstOrThrow
   */
  export type GambarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambar to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gambars.
     */
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar findMany
   */
  export type GambarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter, which Gambars to fetch.
     */
    where?: GambarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gambars to fetch.
     */
    orderBy?: GambarOrderByWithRelationInput | GambarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gambars.
     */
    cursor?: GambarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gambars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gambars.
     */
    skip?: number
    distinct?: GambarScalarFieldEnum | GambarScalarFieldEnum[]
  }

  /**
   * Gambar create
   */
  export type GambarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to create a Gambar.
     */
    data: XOR<GambarCreateInput, GambarUncheckedCreateInput>
  }

  /**
   * Gambar createMany
   */
  export type GambarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gambar createManyAndReturn
   */
  export type GambarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Gambars.
     */
    data: GambarCreateManyInput | GambarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gambar update
   */
  export type GambarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The data needed to update a Gambar.
     */
    data: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
    /**
     * Choose, which Gambar to update.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar updateMany
   */
  export type GambarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gambars.
     */
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyInput>
    /**
     * Filter which Gambars to update
     */
    where?: GambarWhereInput
    limit?: number
  }

  /**
   * Gambar upsert
   */
  export type GambarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * The filter to search for the Gambar to update in case it exists.
     */
    where: GambarWhereUniqueInput
    /**
     * In case the Gambar found by the `where` argument doesn't exist, create a new Gambar with this data.
     */
    create: XOR<GambarCreateInput, GambarUncheckedCreateInput>
    /**
     * In case the Gambar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GambarUpdateInput, GambarUncheckedUpdateInput>
  }

  /**
   * Gambar delete
   */
  export type GambarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
    /**
     * Filter which Gambar to delete.
     */
    where: GambarWhereUniqueInput
  }

  /**
   * Gambar deleteMany
   */
  export type GambarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gambars to delete
     */
    where?: GambarWhereInput
    limit?: number
  }

  /**
   * Gambar without action
   */
  export type GambarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gambar
     */
    select?: GambarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GambarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserstatusScalarFieldEnum: {
    id: 'id',
    status: 'status',
    refresh_token: 'refresh_token',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserstatusScalarFieldEnum = (typeof UserstatusScalarFieldEnum)[keyof typeof UserstatusScalarFieldEnum]


  export const BarangScalarFieldEnum: {
    id: 'id',
    author: 'author',
    nama: 'nama',
    deskripsi: 'deskripsi',
    status: 'status',
    harga: 'harga',
    jenis: 'jenis',
    satuan_jml: 'satuan_jml',
    type_jml: 'type_jml',
    satuan_berat: 'satuan_berat',
    type_brt: 'type_brt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const GambarScalarFieldEnum: {
    id: 'id',
    url: 'url',
    hashdel: 'hashdel',
    barangId: 'barangId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GambarScalarFieldEnum = (typeof GambarScalarFieldEnum)[keyof typeof GambarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'StatusBrng'
   */
  export type EnumStatusBrngFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBrng'>
    


  /**
   * Reference to a field of type 'StatusBrng[]'
   */
  export type ListEnumStatusBrngFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBrng[]'>
    


  /**
   * Reference to a field of type 'SatuanJml'
   */
  export type EnumSatuanJmlFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SatuanJml'>
    


  /**
   * Reference to a field of type 'SatuanJml[]'
   */
  export type ListEnumSatuanJmlFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SatuanJml[]'>
    


  /**
   * Reference to a field of type 'SatuanBrt'
   */
  export type EnumSatuanBrtFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SatuanBrt'>
    


  /**
   * Reference to a field of type 'SatuanBrt[]'
   */
  export type ListEnumSatuanBrtFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SatuanBrt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserstatusWhereInput = {
    AND?: UserstatusWhereInput | UserstatusWhereInput[]
    OR?: UserstatusWhereInput[]
    NOT?: UserstatusWhereInput | UserstatusWhereInput[]
    id?: IntFilter<"Userstatus"> | number
    status?: EnumStatusFilter<"Userstatus"> | $Enums.Status
    refresh_token?: StringNullableFilter<"Userstatus"> | string | null
    userId?: IntNullableFilter<"Userstatus"> | number | null
    createdAt?: DateTimeFilter<"Userstatus"> | Date | string
    updatedAt?: DateTimeFilter<"Userstatus"> | Date | string
  }

  export type UserstatusOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserstatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserstatusWhereInput | UserstatusWhereInput[]
    OR?: UserstatusWhereInput[]
    NOT?: UserstatusWhereInput | UserstatusWhereInput[]
    status?: EnumStatusFilter<"Userstatus"> | $Enums.Status
    refresh_token?: StringNullableFilter<"Userstatus"> | string | null
    createdAt?: DateTimeFilter<"Userstatus"> | Date | string
    updatedAt?: DateTimeFilter<"Userstatus"> | Date | string
  }, "id" | "id" | "userId">

  export type UserstatusOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserstatusCountOrderByAggregateInput
    _avg?: UserstatusAvgOrderByAggregateInput
    _max?: UserstatusMaxOrderByAggregateInput
    _min?: UserstatusMinOrderByAggregateInput
    _sum?: UserstatusSumOrderByAggregateInput
  }

  export type UserstatusScalarWhereWithAggregatesInput = {
    AND?: UserstatusScalarWhereWithAggregatesInput | UserstatusScalarWhereWithAggregatesInput[]
    OR?: UserstatusScalarWhereWithAggregatesInput[]
    NOT?: UserstatusScalarWhereWithAggregatesInput | UserstatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Userstatus"> | number
    status?: EnumStatusWithAggregatesFilter<"Userstatus"> | $Enums.Status
    refresh_token?: StringNullableWithAggregatesFilter<"Userstatus"> | string | null
    userId?: IntNullableWithAggregatesFilter<"Userstatus"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Userstatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Userstatus"> | Date | string
  }

  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id?: IntFilter<"Barang"> | number
    author?: StringNullableFilter<"Barang"> | string | null
    nama?: StringNullableFilter<"Barang"> | string | null
    deskripsi?: StringNullableFilter<"Barang"> | string | null
    status?: EnumStatusBrngFilter<"Barang"> | $Enums.StatusBrng
    harga?: IntNullableFilter<"Barang"> | number | null
    jenis?: StringNullableFilter<"Barang"> | string | null
    satuan_jml?: IntFilter<"Barang"> | number
    type_jml?: EnumSatuanJmlFilter<"Barang"> | $Enums.SatuanJml
    satuan_berat?: IntFilter<"Barang"> | number
    type_brt?: EnumSatuanBrtFilter<"Barang"> | $Enums.SatuanBrt
    createdAt?: DateTimeFilter<"Barang"> | Date | string
    updatedAt?: DateTimeFilter<"Barang"> | Date | string
    gambar?: GambarListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    status?: SortOrder
    harga?: SortOrderInput | SortOrder
    jenis?: SortOrderInput | SortOrder
    satuan_jml?: SortOrder
    type_jml?: SortOrder
    satuan_berat?: SortOrder
    type_brt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gambar?: GambarOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    author?: StringNullableFilter<"Barang"> | string | null
    deskripsi?: StringNullableFilter<"Barang"> | string | null
    status?: EnumStatusBrngFilter<"Barang"> | $Enums.StatusBrng
    harga?: IntNullableFilter<"Barang"> | number | null
    jenis?: StringNullableFilter<"Barang"> | string | null
    satuan_jml?: IntFilter<"Barang"> | number
    type_jml?: EnumSatuanJmlFilter<"Barang"> | $Enums.SatuanJml
    satuan_berat?: IntFilter<"Barang"> | number
    type_brt?: EnumSatuanBrtFilter<"Barang"> | $Enums.SatuanBrt
    createdAt?: DateTimeFilter<"Barang"> | Date | string
    updatedAt?: DateTimeFilter<"Barang"> | Date | string
    gambar?: GambarListRelationFilter
  }, "id" | "id" | "nama">

  export type BarangOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    status?: SortOrder
    harga?: SortOrderInput | SortOrder
    jenis?: SortOrderInput | SortOrder
    satuan_jml?: SortOrder
    type_jml?: SortOrder
    satuan_berat?: SortOrder
    type_brt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarangCountOrderByAggregateInput
    _avg?: BarangAvgOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
    _sum?: BarangSumOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barang"> | number
    author?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    nama?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    status?: EnumStatusBrngWithAggregatesFilter<"Barang"> | $Enums.StatusBrng
    harga?: IntNullableWithAggregatesFilter<"Barang"> | number | null
    jenis?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    satuan_jml?: IntWithAggregatesFilter<"Barang"> | number
    type_jml?: EnumSatuanJmlWithAggregatesFilter<"Barang"> | $Enums.SatuanJml
    satuan_berat?: IntWithAggregatesFilter<"Barang"> | number
    type_brt?: EnumSatuanBrtWithAggregatesFilter<"Barang"> | $Enums.SatuanBrt
    createdAt?: DateTimeWithAggregatesFilter<"Barang"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Barang"> | Date | string
  }

  export type GambarWhereInput = {
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    id?: IntFilter<"Gambar"> | number
    url?: StringNullableFilter<"Gambar"> | string | null
    hashdel?: StringNullableFilter<"Gambar"> | string | null
    barangId?: IntFilter<"Gambar"> | number
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
    updatedAt?: DateTimeFilter<"Gambar"> | Date | string
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }

  export type GambarOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    hashdel?: SortOrderInput | SortOrder
    barangId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Barang?: BarangOrderByWithRelationInput
  }

  export type GambarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GambarWhereInput | GambarWhereInput[]
    OR?: GambarWhereInput[]
    NOT?: GambarWhereInput | GambarWhereInput[]
    url?: StringNullableFilter<"Gambar"> | string | null
    hashdel?: StringNullableFilter<"Gambar"> | string | null
    barangId?: IntFilter<"Gambar"> | number
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
    updatedAt?: DateTimeFilter<"Gambar"> | Date | string
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }, "id">

  export type GambarOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrderInput | SortOrder
    hashdel?: SortOrderInput | SortOrder
    barangId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GambarCountOrderByAggregateInput
    _avg?: GambarAvgOrderByAggregateInput
    _max?: GambarMaxOrderByAggregateInput
    _min?: GambarMinOrderByAggregateInput
    _sum?: GambarSumOrderByAggregateInput
  }

  export type GambarScalarWhereWithAggregatesInput = {
    AND?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    OR?: GambarScalarWhereWithAggregatesInput[]
    NOT?: GambarScalarWhereWithAggregatesInput | GambarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gambar"> | number
    url?: StringNullableWithAggregatesFilter<"Gambar"> | string | null
    hashdel?: StringNullableWithAggregatesFilter<"Gambar"> | string | null
    barangId?: IntWithAggregatesFilter<"Gambar"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Gambar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gambar"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserstatusCreateInput = {
    status?: $Enums.Status
    refresh_token?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserstatusUncheckedCreateInput = {
    id?: number
    status?: $Enums.Status
    refresh_token?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserstatusUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserstatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserstatusCreateManyInput = {
    id?: number
    status?: $Enums.Status
    refresh_token?: string | null
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserstatusUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserstatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangCreateInput = {
    author?: string | null
    nama?: string | null
    deskripsi?: string | null
    status?: $Enums.StatusBrng
    harga?: number | null
    jenis?: string | null
    satuan_jml: number
    type_jml?: $Enums.SatuanJml
    satuan_berat: number
    type_brt?: $Enums.SatuanBrt
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateInput = {
    id?: number
    author?: string | null
    nama?: string | null
    deskripsi?: string | null
    status?: $Enums.StatusBrng
    harga?: number | null
    jenis?: string | null
    satuan_jml: number
    type_jml?: $Enums.SatuanJml
    satuan_berat: number
    type_brt?: $Enums.SatuanBrt
    createdAt?: Date | string
    updatedAt?: Date | string
    gambar?: GambarUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangUpdateInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gambar?: GambarUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateManyInput = {
    id?: number
    author?: string | null
    nama?: string | null
    deskripsi?: string | null
    status?: $Enums.StatusBrng
    harga?: number | null
    jenis?: string | null
    satuan_jml: number
    type_jml?: $Enums.SatuanJml
    satuan_berat: number
    type_brt?: $Enums.SatuanBrt
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangUpdateManyMutationInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateInput = {
    url?: string | null
    hashdel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Barang: BarangCreateNestedOneWithoutGambarInput
  }

  export type GambarUncheckedCreateInput = {
    id?: number
    url?: string | null
    hashdel?: string | null
    barangId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Barang?: BarangUpdateOneRequiredWithoutGambarNestedInput
  }

  export type GambarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    barangId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyInput = {
    id?: number
    url?: string | null
    hashdel?: string | null
    barangId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUpdateManyMutationInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    barangId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserstatusCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    refresh_token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserstatusAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserstatusMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    refresh_token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserstatusMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    refresh_token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserstatusSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusBrngFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBrng | EnumStatusBrngFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBrngFilter<$PrismaModel> | $Enums.StatusBrng
  }

  export type EnumSatuanJmlFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanJml | EnumSatuanJmlFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanJmlFilter<$PrismaModel> | $Enums.SatuanJml
  }

  export type EnumSatuanBrtFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanBrt | EnumSatuanBrtFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanBrtFilter<$PrismaModel> | $Enums.SatuanBrt
  }

  export type GambarListRelationFilter = {
    every?: GambarWhereInput
    some?: GambarWhereInput
    none?: GambarWhereInput
  }

  export type GambarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    satuan_jml?: SortOrder
    type_jml?: SortOrder
    satuan_berat?: SortOrder
    type_brt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    satuan_jml?: SortOrder
    satuan_berat?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    satuan_jml?: SortOrder
    type_jml?: SortOrder
    satuan_berat?: SortOrder
    type_brt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    satuan_jml?: SortOrder
    type_jml?: SortOrder
    satuan_berat?: SortOrder
    type_brt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    satuan_jml?: SortOrder
    satuan_berat?: SortOrder
  }

  export type EnumStatusBrngWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBrng | EnumStatusBrngFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBrngWithAggregatesFilter<$PrismaModel> | $Enums.StatusBrng
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBrngFilter<$PrismaModel>
    _max?: NestedEnumStatusBrngFilter<$PrismaModel>
  }

  export type EnumSatuanJmlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanJml | EnumSatuanJmlFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanJmlWithAggregatesFilter<$PrismaModel> | $Enums.SatuanJml
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSatuanJmlFilter<$PrismaModel>
    _max?: NestedEnumSatuanJmlFilter<$PrismaModel>
  }

  export type EnumSatuanBrtWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanBrt | EnumSatuanBrtFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanBrtWithAggregatesFilter<$PrismaModel> | $Enums.SatuanBrt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSatuanBrtFilter<$PrismaModel>
    _max?: NestedEnumSatuanBrtFilter<$PrismaModel>
  }

  export type BarangScalarRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type GambarCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hashdel?: SortOrder
    barangId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GambarAvgOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
  }

  export type GambarMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hashdel?: SortOrder
    barangId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GambarMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    hashdel?: SortOrder
    barangId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GambarSumOrderByAggregateInput = {
    id?: SortOrder
    barangId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GambarCreateNestedManyWithoutBarangInput = {
    create?: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput> | GambarCreateWithoutBarangInput[] | GambarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutBarangInput | GambarCreateOrConnectWithoutBarangInput[]
    createMany?: GambarCreateManyBarangInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type GambarUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput> | GambarCreateWithoutBarangInput[] | GambarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutBarangInput | GambarCreateOrConnectWithoutBarangInput[]
    createMany?: GambarCreateManyBarangInputEnvelope
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
  }

  export type EnumStatusBrngFieldUpdateOperationsInput = {
    set?: $Enums.StatusBrng
  }

  export type EnumSatuanJmlFieldUpdateOperationsInput = {
    set?: $Enums.SatuanJml
  }

  export type EnumSatuanBrtFieldUpdateOperationsInput = {
    set?: $Enums.SatuanBrt
  }

  export type GambarUpdateManyWithoutBarangNestedInput = {
    create?: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput> | GambarCreateWithoutBarangInput[] | GambarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutBarangInput | GambarCreateOrConnectWithoutBarangInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutBarangInput | GambarUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: GambarCreateManyBarangInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutBarangInput | GambarUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutBarangInput | GambarUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type GambarUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput> | GambarCreateWithoutBarangInput[] | GambarUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: GambarCreateOrConnectWithoutBarangInput | GambarCreateOrConnectWithoutBarangInput[]
    upsert?: GambarUpsertWithWhereUniqueWithoutBarangInput | GambarUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: GambarCreateManyBarangInputEnvelope
    set?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    disconnect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    delete?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    connect?: GambarWhereUniqueInput | GambarWhereUniqueInput[]
    update?: GambarUpdateWithWhereUniqueWithoutBarangInput | GambarUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: GambarUpdateManyWithWhereWithoutBarangInput | GambarUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: GambarScalarWhereInput | GambarScalarWhereInput[]
  }

  export type BarangCreateNestedOneWithoutGambarInput = {
    create?: XOR<BarangCreateWithoutGambarInput, BarangUncheckedCreateWithoutGambarInput>
    connectOrCreate?: BarangCreateOrConnectWithoutGambarInput
    connect?: BarangWhereUniqueInput
  }

  export type BarangUpdateOneRequiredWithoutGambarNestedInput = {
    create?: XOR<BarangCreateWithoutGambarInput, BarangUncheckedCreateWithoutGambarInput>
    connectOrCreate?: BarangCreateOrConnectWithoutGambarInput
    upsert?: BarangUpsertWithoutGambarInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutGambarInput, BarangUpdateWithoutGambarInput>, BarangUncheckedUpdateWithoutGambarInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusBrngFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBrng | EnumStatusBrngFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBrngFilter<$PrismaModel> | $Enums.StatusBrng
  }

  export type NestedEnumSatuanJmlFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanJml | EnumSatuanJmlFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanJmlFilter<$PrismaModel> | $Enums.SatuanJml
  }

  export type NestedEnumSatuanBrtFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanBrt | EnumSatuanBrtFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanBrtFilter<$PrismaModel> | $Enums.SatuanBrt
  }

  export type NestedEnumStatusBrngWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBrng | EnumStatusBrngFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBrng[] | ListEnumStatusBrngFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBrngWithAggregatesFilter<$PrismaModel> | $Enums.StatusBrng
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBrngFilter<$PrismaModel>
    _max?: NestedEnumStatusBrngFilter<$PrismaModel>
  }

  export type NestedEnumSatuanJmlWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanJml | EnumSatuanJmlFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanJml[] | ListEnumSatuanJmlFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanJmlWithAggregatesFilter<$PrismaModel> | $Enums.SatuanJml
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSatuanJmlFilter<$PrismaModel>
    _max?: NestedEnumSatuanJmlFilter<$PrismaModel>
  }

  export type NestedEnumSatuanBrtWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SatuanBrt | EnumSatuanBrtFieldRefInput<$PrismaModel>
    in?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    notIn?: $Enums.SatuanBrt[] | ListEnumSatuanBrtFieldRefInput<$PrismaModel>
    not?: NestedEnumSatuanBrtWithAggregatesFilter<$PrismaModel> | $Enums.SatuanBrt
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSatuanBrtFilter<$PrismaModel>
    _max?: NestedEnumSatuanBrtFilter<$PrismaModel>
  }

  export type GambarCreateWithoutBarangInput = {
    url?: string | null
    hashdel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUncheckedCreateWithoutBarangInput = {
    id?: number
    url?: string | null
    hashdel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarCreateOrConnectWithoutBarangInput = {
    where: GambarWhereUniqueInput
    create: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput>
  }

  export type GambarCreateManyBarangInputEnvelope = {
    data: GambarCreateManyBarangInput | GambarCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type GambarUpsertWithWhereUniqueWithoutBarangInput = {
    where: GambarWhereUniqueInput
    update: XOR<GambarUpdateWithoutBarangInput, GambarUncheckedUpdateWithoutBarangInput>
    create: XOR<GambarCreateWithoutBarangInput, GambarUncheckedCreateWithoutBarangInput>
  }

  export type GambarUpdateWithWhereUniqueWithoutBarangInput = {
    where: GambarWhereUniqueInput
    data: XOR<GambarUpdateWithoutBarangInput, GambarUncheckedUpdateWithoutBarangInput>
  }

  export type GambarUpdateManyWithWhereWithoutBarangInput = {
    where: GambarScalarWhereInput
    data: XOR<GambarUpdateManyMutationInput, GambarUncheckedUpdateManyWithoutBarangInput>
  }

  export type GambarScalarWhereInput = {
    AND?: GambarScalarWhereInput | GambarScalarWhereInput[]
    OR?: GambarScalarWhereInput[]
    NOT?: GambarScalarWhereInput | GambarScalarWhereInput[]
    id?: IntFilter<"Gambar"> | number
    url?: StringNullableFilter<"Gambar"> | string | null
    hashdel?: StringNullableFilter<"Gambar"> | string | null
    barangId?: IntFilter<"Gambar"> | number
    createdAt?: DateTimeFilter<"Gambar"> | Date | string
    updatedAt?: DateTimeFilter<"Gambar"> | Date | string
  }

  export type BarangCreateWithoutGambarInput = {
    author?: string | null
    nama?: string | null
    deskripsi?: string | null
    status?: $Enums.StatusBrng
    harga?: number | null
    jenis?: string | null
    satuan_jml: number
    type_jml?: $Enums.SatuanJml
    satuan_berat: number
    type_brt?: $Enums.SatuanBrt
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangUncheckedCreateWithoutGambarInput = {
    id?: number
    author?: string | null
    nama?: string | null
    deskripsi?: string | null
    status?: $Enums.StatusBrng
    harga?: number | null
    jenis?: string | null
    satuan_jml: number
    type_jml?: $Enums.SatuanJml
    satuan_berat: number
    type_brt?: $Enums.SatuanBrt
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangCreateOrConnectWithoutGambarInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutGambarInput, BarangUncheckedCreateWithoutGambarInput>
  }

  export type BarangUpsertWithoutGambarInput = {
    update: XOR<BarangUpdateWithoutGambarInput, BarangUncheckedUpdateWithoutGambarInput>
    create: XOR<BarangCreateWithoutGambarInput, BarangUncheckedCreateWithoutGambarInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutGambarInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutGambarInput, BarangUncheckedUpdateWithoutGambarInput>
  }

  export type BarangUpdateWithoutGambarInput = {
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUncheckedUpdateWithoutGambarInput = {
    id?: IntFieldUpdateOperationsInput | number
    author?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusBrngFieldUpdateOperationsInput | $Enums.StatusBrng
    harga?: NullableIntFieldUpdateOperationsInput | number | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
    satuan_jml?: IntFieldUpdateOperationsInput | number
    type_jml?: EnumSatuanJmlFieldUpdateOperationsInput | $Enums.SatuanJml
    satuan_berat?: IntFieldUpdateOperationsInput | number
    type_brt?: EnumSatuanBrtFieldUpdateOperationsInput | $Enums.SatuanBrt
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarCreateManyBarangInput = {
    id?: number
    url?: string | null
    hashdel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GambarUpdateWithoutBarangInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GambarUncheckedUpdateManyWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    hashdel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BarangCountOutputTypeDefaultArgs instead
     */
    export type BarangCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserstatusDefaultArgs instead
     */
    export type UserstatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserstatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarangDefaultArgs instead
     */
    export type BarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarangDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GambarDefaultArgs instead
     */
    export type GambarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GambarDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}