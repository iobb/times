const pageConfig = {
  // Title for your status page
  title: "在线状态页面-Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://cn.bing.com', label: '必应' , highlight: true},
    { link: 'https://github.com/lyc8503', label: 'Github', highlight: true },
  ],
}
const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'admin:admin',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
     {
      id: 'hy',
      name: '00web',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://cloudsh.serv00.net/info',
      tooltip: '00web',
      timeout: 5000,
    },
     {
      id: 'bear',
      name: 'Bearlog ʕ•ᴥ•ʔ',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://pay.bearblog.dev',
      tooltip: 'Bearblog',
      //checkLocationWorkerRoute: 'https://ip.bcn.us.kg/',
      timeout: 5000,
    },
     {
      id: 'kvu',
      name: 'TEST.KVU',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://COM.K.VU',
      tooltip: 'test00.html',
      timeout: 5000,
    },
    {
      id: 'bogeblog',
      name: 'Boge.Notion',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://blog.boge.us.kg',
      tooltip: '伯格blog',
      timeout: 5000,
    },
    {
      id: 'uul',
      name: 'INFO-NAV',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'http://uul.us.kg',      
      timeout: 5000,
    },
    // Example TCP Monitor
     {
      id: 'hostmost',
      name: 'HostMost_JP_125M',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://boon.us.kg',      
      timeout: 5000,
    },
    {
      id: 'haxvpsus3',
      name: 'HaX_VPS.Us3',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'bcn.us.kg',
      tooltip: '我的生产服务器SSH',
      statusPageLink: 'https://panel11.serv00.com',
      timeout: 5000,
    },
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'Bing.com',
      // `name` is used at status page and callback message
      name: 'Bing-GET',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://bing.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '这是此监视器的工具提示',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://bing.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      timeout: 5000,
    },
     {
      id: 'cf',
      name: 'CloudFlare',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://www.cloudflare.com',
      tooltip: 'CloudFlare',
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
