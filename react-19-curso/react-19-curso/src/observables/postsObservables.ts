import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const postsObservable = new Observable(subscriber => {
  const intervalId = setInterval(() => {
    ajax.getJSON(postsUrl).pipe(
      map((posts: any) => posts)
    ).subscribe(posts => {
      subscriber.next(posts);
    });
  }, 5000); // Fetch posts every 5 seconds

  return () => clearInterval(intervalId);
});