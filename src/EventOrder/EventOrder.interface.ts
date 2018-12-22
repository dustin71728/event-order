export type EventName = string
export type Listener = (info: EventCallbackParameters, ...args: any[]) => void

export interface EmitType {
  once: any
  onlyend: any
  repeat: any
}

export type EmitTypeKeys = keyof EmitType

export interface OnOffDispatcher {
  on: Function
  off: Function
}

export type Emitter = NodeJS.EventEmitter | EventTarget | OnOffDispatcher

export interface EventCallbackParameters {
  data: any
  lastExeTimestamp: number
  delay: number
  isLastEvent: boolean
  isEnd: boolean
  passEvents: string[]
}

export interface EventOrderConfig {
  name: EventName
  cb?: Listener
  emitter?: Emitter
  context?: object
  threshold?: number
  initData?: any
  scheduleType?: EmitTypeKeys
}

export interface EventOrderElement extends EventOrderConfig {
  current: number
  delay: number
  timestamp: number
  data: any
  threshold: number
  internalListener: Function | null
  alwaysOn?: boolean
}

export type EmitterConfig = Pick<EventOrderConfig, "cb" | "emitter" | "threshold" | "context" | "scheduleType" | "initData">

export type EventOrderConfigList = Array<EventOrderConfig | EventName>
export type EventOrderElementList = Array<EventOrderElement>