export type Event = string; // TBD

export type EventContext = unknown; // TBD something like analyticsData

export interface Subscriber {
  notify(event: Event, context?: EventContext): void;
}

export interface Publisher {
  subscriptions: Set<Subscriber>;

  subscribe(subscriber: Subscriber): void;

  report(event: Event): void;
}
