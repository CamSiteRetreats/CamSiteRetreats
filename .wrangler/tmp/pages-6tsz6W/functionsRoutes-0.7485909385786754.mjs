import { onRequest as __api_activity_logs_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\activity-logs.js"
import { onRequest as __api_admin_customers_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\admin_customers.js"
import { onRequest as __api_admin_tours_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\admin_tours.js"
import { onRequest as __api_auth_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\auth.js"
import { onRequest as __api_bookings_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\bookings.js"
import { onRequest as __api_leads_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\leads.js"
import { onRequest as __api_payment_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\payment.js"
import { onRequest as __api_schedules_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\schedules.js"
import { onRequest as __api_sepay_webhook_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\sepay-webhook.js"
import { onRequest as __api_tours_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\tours.js"
import { onRequest as __api_trash_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\trash.js"
import { onRequest as __api_users_js_onRequest } from "E:\\UIUX\\ui-ux-pro-max-skill-main\\CAM SITE RETREATS\\functions\\api\\users.js"

export const routes = [
    {
      routePath: "/api/activity-logs",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_activity_logs_js_onRequest],
    },
  {
      routePath: "/api/admin_customers",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_admin_customers_js_onRequest],
    },
  {
      routePath: "/api/admin_tours",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_admin_tours_js_onRequest],
    },
  {
      routePath: "/api/auth",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_auth_js_onRequest],
    },
  {
      routePath: "/api/bookings",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_bookings_js_onRequest],
    },
  {
      routePath: "/api/leads",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_leads_js_onRequest],
    },
  {
      routePath: "/api/payment",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_payment_js_onRequest],
    },
  {
      routePath: "/api/schedules",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_schedules_js_onRequest],
    },
  {
      routePath: "/api/sepay-webhook",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_sepay_webhook_js_onRequest],
    },
  {
      routePath: "/api/tours",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_tours_js_onRequest],
    },
  {
      routePath: "/api/trash",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_trash_js_onRequest],
    },
  {
      routePath: "/api/users",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_users_js_onRequest],
    },
  ]