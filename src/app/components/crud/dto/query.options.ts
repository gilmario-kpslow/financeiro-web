export interface QueryBuilder {
  toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}

export class QueryOptions implements QueryBuilder {
  pageNumber: number;
  pageSize: number;
  sortOrder: string;
  sortDirection: string;
  search: any;
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];

  constructor() {
    this.search = undefined;
    this.pageNumber = 0;
    this.pageSize = 10;
    this.sortOrder = '';
    this.sortDirection = '';
  }

  toQueryMap() {
    const queryMap = new Map<string, string>();
    queryMap.set('page', `${this.pageNumber}`);
    queryMap.set('size', `${this.pageSize}`);
    queryMap.set('sortOrder', `${this.sortOrder}`);
    queryMap.set('sortDirection', `${this.sortDirection}`);
    if (this.search) {
      Object.keys(this.search).forEach(key => {
        if (this.search[key]) {
          queryMap.set(key, `${this.search[key]}`);
        }
      })
    }
    return queryMap;
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      queryString = queryString.concat(`${key}=${value}&`);
    });
    return queryString.substring(0, queryString.length - 1);
  }
}
