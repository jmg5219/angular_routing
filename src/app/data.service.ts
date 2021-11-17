import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //This is the data we want to share
  private dataSource = new BehaviorSubject([
    {
      id: 0,
      title: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 1,
      title: 'Maecenas consequat',
      content: 'Maecenas consequat sagittis orci quis accumsan.',
    },
    {
      id: 2,
      title: 'Curabitur fringilla',
      content:
        'Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula.',
    },
  ]);

  //Identify as observable
  currentData = this.dataSource.asObservable();

  constructor() {}
}
