class ApiError {
  public static isAssignableFrom(argument: any): argument is ApiError {
    return argument.error !== undefined;
  }

  private _error!: string;
  private _error_description!: string;

  public get error(): string {
    return this._error;
  }

  public set error(value: string) {
    this._error = value;
  }

  public get error_description(): string {
    return this._error_description;
  }

  public set error_description(value: string) {
    this._error_description = value;
  }
}

export default ApiError;
