export { Breadcrumb, Request, SdkInfo, Event, EventStatus, Exception, Response, Severity, StackFrame, Stacktrace, Thread, User, } from '@sentry/types';
export { SeverityLevel } from '@sentry/utils';
export { addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, Scope, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, Transports, withScope, } from '@sentry/browser';
export { BrowserOptions } from '@sentry/browser';
export { BrowserClient, ReportDialogOptions } from '@sentry/browser';
export { defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, } from '@sentry/browser';
export { SDK_NAME, SDK_VERSION } from '@sentry/browser';
import { BrowserTracing } from './browser';
import { addExtensionMethods } from './hubextensions';
export { Span } from './span';
declare const INTEGRATIONS: {
    BrowserTracing: typeof BrowserTracing;
    GlobalHandlers: typeof import("@sentry/browser/build/npm/types/integrations").GlobalHandlers;
    TryCatch: typeof import("@sentry/browser/build/npm/types/integrations").TryCatch;
    Breadcrumbs: typeof import("@sentry/browser/build/npm/types/integrations").Breadcrumbs;
    LinkedErrors: typeof import("@sentry/browser/build/npm/types/integrations").LinkedErrors;
    UserAgent: typeof import("@sentry/browser/build/npm/types/integrations").UserAgent;
    Dedupe: typeof import("@sentry/browser/build/npm/types/integrations").Dedupe;
    FunctionToString: typeof import("@sentry/core/build/types/integrations").FunctionToString;
    InboundFilters: typeof import("@sentry/core/build/types/integrations").InboundFilters;
};
export { INTEGRATIONS as Integrations };
export { BrowserTracing };
export { addExtensionMethods };
//# sourceMappingURL=index.bundle.d.ts.map