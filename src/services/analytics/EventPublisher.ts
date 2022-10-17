import { Event, Publisher, Subscriber } from "./definitions";

export class EventPublisher implements Publisher {
  subscriptions: Set<Subscriber>;

  constructor() {
    this.subscriptions = new Set();
  }

  subscribe(subscriber: Subscriber): void {
    this.subscriptions.add(subscriber);
  }

  report(event: Event): void {
    this.subscriptions.forEach((subscriber) => subscriber.notify(event));
  }
}
