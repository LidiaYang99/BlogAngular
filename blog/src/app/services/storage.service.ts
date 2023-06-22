import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // 从本地存储获取数据
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // 从本地存储移除数据
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // 清空本地存储
  clear(): void {
    localStorage.clear();
  }
}
