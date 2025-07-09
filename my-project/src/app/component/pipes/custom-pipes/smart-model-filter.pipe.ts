import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'smartModelFilter',
  standalone: true,
})
export class SmartModelFilterPipe implements PipeTransform {
  transform(
    items: User[],
    search: string = '',
    fields: (keyof User | string)[] = [],
    sortBy?: keyof User | string,
    sortType: 'asc' | 'desc' = 'asc'
  ): User[] {
    if (!Array.isArray(items) || items.length === 0) return [];

    let filtered = items;

    if (search && fields.length > 0) {
      filtered = items.filter((item) =>
        fields.some((field) => {
          const value = this.deepFilter(item, field);
          return value?.toString().toLowerCase().includes(search.toLowerCase());
        })
      );
    }

    if (sortBy) {
      filtered = filtered.sort((a,b) => {
        const aVal = this.deepFilter(a, sortBy);
        const bVal = this.deepFilter(b, sortBy);

        if (aVal == null || bVal == null) return 0;

        const conversion = aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        return sortType === 'asc' ? conversion : -conversion;
      })
    }
    return filtered;
  }

  private deepFilter(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }
}
