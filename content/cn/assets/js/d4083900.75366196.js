"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1132],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?i.createElement(h,a(a({ref:t},p),{},{components:r})):i.createElement(h,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9635:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],s={version:"0.7.0",title:"HoodieMetrics Guide",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:new Date("2020-06-20T19:59:57.000Z")},l=void 0,c={unversionedId:"metrics",id:"version-0.7.0/metrics",isDocsHomePage:!1,title:"HoodieMetrics Guide",description:"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.",source:"@site/versioned_docs/version-0.7.0/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/cn/docs/0.7.0/metrics",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.7.0/metrics.md",version:"0.7.0",frontMatter:{version:"0.7.0",title:"HoodieMetrics Guide",keywords:["hudi","administration","operation","devops","metrics"],summary:"This section offers an overview of metrics in Hudi",toc:!0,last_modified_at:"2020-06-20T19:59:57.000Z"},sidebar:"version-0.7.0/docs",previous:{title:"Docker Demo",permalink:"/cn/docs/0.7.0/docker_demo"},next:{title:"Privacy Policy",permalink:"/cn/docs/0.7.0/privacy"}},p=[{value:"MetricsReporter",id:"metricsreporter",children:[{value:"JmxMetricsReporter",id:"jmxmetricsreporter",children:[]},{value:"MetricsGraphiteReporter",id:"metricsgraphitereporter",children:[]},{value:"DatadogMetricsReporter",id:"datadogmetricsreporter",children:[]},{value:"UserDefinedMetricsReporter",id:"userdefinedmetricsreporter",children:[]}]},{value:"HoodieMetrics",id:"hoodiemetrics",children:[]}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will introduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetricsReporter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," in Hudi. You can view the metrics-related configurations ",(0,o.kt)("a",{parentName:"p",href:"configurations#metrics-configs"},"here"),"."),(0,o.kt)("h2",{id:"metricsreporter"},"MetricsReporter"),(0,o.kt)("p",null,"MetricsReporter provides APIs for reporting ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," to user-specified backends. Currently, the implementations include InMemoryMetricsReporter, JmxMetricsReporter, MetricsGraphiteReporter and DatadogMetricsReporter. Since InMemoryMetricsReporter is only used for testing, we will introduce the other three implementations."),(0,o.kt)("h3",{id:"jmxmetricsreporter"},"JmxMetricsReporter"),(0,o.kt)("p",null,"JmxMetricsReporter is an implementation of JMX reporter, which used to report JMX metrics."),(0,o.kt)("h4",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"The following is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"JmxMetricsReporter"),". More detaile configurations can be referenced ",(0,o.kt)("a",{parentName:"p",href:"configurations#jmx"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=JMX\nhoodie.metrics.jmx.host=192.168.0.106\nhoodie.metrics.jmx.port=4001\n")),(0,o.kt)("h4",{id:"demo"},"Demo"),(0,o.kt)("p",null,"As configured above, JmxMetricsReporter will started JMX server on port 4001. We can start a jconsole to connect to 192.168.0.106:4001. Below is an illustration of monitoring Hudi JMX metrics through jconsole."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_jxm_metrics.png",alt:"hudi_jxm_metrics.png"})),(0,o.kt)("h3",{id:"metricsgraphitereporter"},"MetricsGraphiteReporter"),(0,o.kt)("p",null,"MetricsGraphiteReporter is an implementation of Graphite reporter, which connects to a Graphite server, and send ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," to it."),(0,o.kt)("h4",{id:"configurations-1"},"Configurations"),(0,o.kt)("p",null,"The following is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"MetricsGraphiteReporter"),". More detaile configurations can be referenced ",(0,o.kt)("a",{parentName:"p",href:"configurations#graphite"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=GRAPHITE\nhoodie.metrics.graphite.host=192.168.0.106\nhoodie.metrics.graphite.port=2003\nhoodie.metrics.graphite.metric.prefix=<your metrics prefix>\n")),(0,o.kt)("h4",{id:"demo-1"},"Demo"),(0,o.kt)("p",null,"As configured above, assuming a Graphite server is running on host 192.168.0.106 and port 2003, a running Hudi job will connect and report metrics data to it. Below is an illustration of monitoring hudi metrics through Graphite."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_graphite_metrics.png",alt:"hudi_graphite_metrics.png"})),(0,o.kt)("h3",{id:"datadogmetricsreporter"},"DatadogMetricsReporter"),(0,o.kt)("p",null,"DatadogMetricsReporter is an implementation of Datadog reporter.\nA reporter which publishes metric values to Datadog monitoring service via Datadog HTTP API."),(0,o.kt)("h4",{id:"configurations-2"},"Configurations"),(0,o.kt)("p",null,"The following is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"DatadogMetricsReporter"),". More detailed configurations can be referenced ",(0,o.kt)("a",{parentName:"p",href:"configurations#datadog"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\nhoodie.metrics.datadog.api.site=EU # or US\nhoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.site")," will set the Datadog API site, which determines whether the requests will be sent to api.datadoghq.eu (EU) or api.datadoghq.com (US). Set this according to your Datadog account settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.api.key")," will set the api key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hoodie.metrics.datadog.metric.prefix")," will help segregate metrics by setting different prefixes for different jobs. Note that it will use ",(0,o.kt)("inlineCode",{parentName:"li"},".")," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"foo"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"foo.")," will be prepended to the metric name.")),(0,o.kt)("h4",{id:"demo-2"},"Demo"),(0,o.kt)("p",null,"In this demo, we ran a ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," job with ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," turned on and other configurations set properly."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/blog/2020-05-28-datadog-metrics-demo.png",alt:"hudi_datadog_metrics.png"})),(0,o.kt)("p",null," As shown above, we were able to collect Hudi's action-related metrics like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.commit.totalScanTime"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.clean.duration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.index.lookup.duration")),(0,o.kt)("p",{parentName:"li"},"as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"-specific metrics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.duration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<prefix>.<table name>.deltastreamer.hiveSyncDuration")))),(0,o.kt)("h3",{id:"userdefinedmetricsreporter"},"UserDefinedMetricsReporter"),(0,o.kt)("p",null,"Allows users to define a custom metrics reporter."),(0,o.kt)("h4",{id:"configurations-3"},"Configurations"),(0,o.kt)("p",null,"The following is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"UserDefinedMetricsReporter"),". More detailed configurations can be referenced ",(0,o.kt)("a",{parentName:"p",href:"configurations#user-defined-reporter"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.class=test.TestUserDefinedMetricsReporter\n")),(0,o.kt)("h4",{id:"demo-3"},"Demo"),(0,o.kt)("p",null,"In this simple demo, TestMetricsReporter will print all gauges every 10 seconds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static class TestUserDefinedMetricsReporter \n    extends AbstractUserDefinedMetricsReporter {\n  private static final Logger log = LogManager.getLogger(DummyMetricsReporter.class);\n\n  private ScheduledExecutorService exec = Executors.newScheduledThreadPool(1, r -> {\n      Thread t = Executors.defaultThreadFactory().newThread(r);\n      t.setDaemon(true);\n      return t;\n  });\n\n  public TestUserDefinedMetricsReporter(Properties props, MetricRegistry registry) {\n    super(props, registry);\n  }\n\n  @Override\n  public void start() {\n    exec.schedule(this::report, 10, TimeUnit.SECONDS);\n  }\n\n  @Override\n  public void report() {\n    this.getRegistry().getGauges().forEach((key, value) -> \n      log.info("key: " + key + " value: " + value.getValue().toString()));\n  }\n\n  @Override\n  public Closeable getReporter() {\n    return null;\n  }\n\n  @Override\n  public void stop() {\n    exec.shutdown();\n  }\n}\n')),(0,o.kt)("h2",{id:"hoodiemetrics"},"HoodieMetrics"),(0,o.kt)("p",null,"Once the Hudi writer is configured with the right table and environment for ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics"),", it produces the following ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics"),", that aid in debugging hudi tables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Commit Duration")," - The amount of time it took to successfully commit a batch of records"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rollback Duration")," - Similarly, the amount of time taken to undo partial data left over by a failed commit (rollback happens automatically after a failing write)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Level metrics")," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Record Level Metrics")," - Total records inserted/updated etc per commit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Partition Level metrics")," - number of partitions upserted (super useful to understand sudden spikes in commit duration)")),(0,o.kt)("p",null,"These ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMetrics")," can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."),(0,o.kt)("figure",null,(0,o.kt)("img",{className:"docimage",src:"/assets/images/hudi_commit_duration.png",alt:"hudi_commit_duration.png"})))}m.isMDXComponent=!0}}]);