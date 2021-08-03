"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9306],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Employing the right indexes for fast updates, deletes in Apache Hudi",excerpt:"Detailing different indexing mechanisms in Hudi and when to use each of them",author:"vinoth",category:"blog"},l=void 0,d={permalink:"/cn/blog/2020/11/11/hudi-indexing-mechanisms",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-11-11-hudi-indexing-mechanisms.md",source:"@site/blog/2020-11-11-hudi-indexing-mechanisms.md",title:"Employing the right indexes for fast updates, deletes in Apache Hudi",description:"Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables",date:"2020-11-11T00:00:00.000Z",formattedDate:"November 11, 2020",tags:[],readingTime:7.585,truncated:!0,prevItem:{title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",permalink:"/cn/blog/2020/12/01/high-perf-data-lake-with-hudi-and-alluxio-t3go"},nextItem:{title:"Apply record level changes from relational databases to Amazon S3 data lake using Apache Hudi on Amazon EMR and AWS Database Migration Service",permalink:"/cn/blog/2020/10/19/hudi-meets-aws-emr-and-aws-dms"}},p=[{value:"Index Types in Hudi",id:"index-types-in-hudi",children:[]},{value:"Workload: Late arriving updates to fact tables",id:"workload-late-arriving-updates-to-fact-tables",children:[]},{value:"Workload: De-Duplication in event tables",id:"workload-de-duplication-in-event-tables",children:[]},{value:"Workload: Random updates/deletes to a dimension table",id:"workload-random-updatesdeletes-to-a-dimension-table",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function c(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables\nfast upsert/delete operations, by avoiding the need to join against the entire dataset to determine which files to rewrite.\nFor Merge-On-Read tables, this design allows Hudi to bound the amount of records any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions"},"Apache Hive ACID"),"),\ncould end up having to merge all the base files against all incoming updates/delete records."),(0,o.kt)("p",null,"At a high level, an index maps a record key + an optional partition path to a file group ID on storage (explained\nmore in detail ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts"},"here"),") and during write operations, we lookup this mapping to route an incoming update/delete\nto a log file attached to the base file (MOR) or to the latest base file that now needs to be merged against (COW). The index also enables\nHudi to enforce unique constraints based on the record keys."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fact table",src:n(6907).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)")),(0,o.kt)("p",null,"Given that Hudi already supports few different indexing techniques and is also continuously improving/adding more to its toolkit, the rest of the blog\nattempts to explain different categories of workloads, from our experience and suggests what index types to use for each. We will also interlace\ncommentary on existing limitations, upcoming work and optimizations/tradeoffs along the way. "),(0,o.kt)("h2",{id:"index-types-in-hudi"},"Index Types in Hudi"),(0,o.kt)("p",null,"Currently, Hudi supports the following indexing options. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bloom Index (default):")," Employs bloom filters built out of the record keys, optionally also pruning candidate files using record key ranges."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple Index:")," Performs a lean join of the incoming update/delete records against keys extracted from the table on storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HBase Index:")," Manages the index mapping in an external Apache HBase table.")),(0,o.kt)("p",null,"Writers can pick one of these options using ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.index.type")," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.index.class")," and supplying a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkHoodieIndex")," (for Apache Spark writers) "),(0,o.kt)("p",null,"Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_BLOOM")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_SIMPLE")," - respectively. HBase index is by nature a global index."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Global index:"),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete cost grows\nwith size of the table ",(0,o.kt)("inlineCode",{parentName:"p"},"O(size of table)"),", which might still be acceptable for smaller tables.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non Global index:")," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"O(number of records updated/deleted)")," and\nscales well with write volume."))),(0,o.kt)("p",null,"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workloads.\nNext, let\u2019s walk through some typical workloads and see how to leverage the right Hudi index for such use-cases."),(0,o.kt)("h2",{id:"workload-late-arriving-updates-to-fact-tables"},"Workload: Late arriving updates to fact tables"),(0,o.kt)("p",null,"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fact table",src:n(9517).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure: Typical update pattern for Fact tables")),(0,o.kt)("p",null,"For such workloads, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOOM")," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."),(0,o.kt)("p",null,"In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.type=DYNAMIC_V0"),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio. "),(0,o.kt)("p",null,"In the near future, we plan to introduce a much speedier version of the BLOOM index that tracks bloom filters/ranges in an internal Hudi metadata table, indexed for fast\npoint lookups. This would avoid any current limitations around reading bloom filters/ranges from the base files themselves, to perform the lookup. (see\n",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+and+Query+Planning+Improvements?src=contextnavpagetreemode"},"RFC-15")," for the general design)"),(0,o.kt)("h2",{id:"workload-de-duplication-in-event-tables"},"Workload: De-Duplication in event tables"),(0,o.kt)("p",null,'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Event table",src:n(2260).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure showing the spread of updates for Event table.")),(0,o.kt)("p",null,"In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication ala HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOOM")," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,o.kt)("inlineCode",{parentName:"p"},"event_ts + event_id")," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions. "),(0,o.kt)("h2",{id:"workload-random-updatesdeletes-to-a-dimension-table"},"Workload: Random updates/deletes to a dimension table"),(0,o.kt)("p",null,"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dimensions table",src:n(7229).Z}),"\n",(0,o.kt)("em",{parentName:"p"},"Figure showing the spread of updates for Dimensions table.")),(0,o.kt)("p",null,"As discussed before, the ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOOM")," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,o.kt)("inlineCode",{parentName:"p"},"SIMPLE")," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,o.kt)("inlineCode",{parentName:"p"},"HBASE")," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables. "),(0,o.kt)("p",null,"When using a global index, users should also consider setting ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.bloom.index.update.partition.path=true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.simple.index.update.partition.path=true")," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."),(0,o.kt)("p",null,"Going forward, we plan to build ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+08+%3A+Record+level+indexing+mechanisms+for+Hudi+datasets?src=contextnavpagetreemode"},"record level indexing"),"\nright within Hudi, which will improve the index look-up time and will also avoid additional overhead of maintaining an external system like hbase. "),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Without the indexing capabilities in Hudi, it would not been possible to make upserts/deletes happen at ",(0,o.kt)("a",{parentName:"p",href:"https://eng.uber.com/apache-hudi-graduation/"},"very large scales"),".\nHopefully this post gave you good enough context on the indexing mechanisms today and how different tradeoffs play out. "),(0,o.kt)("p",null,"Some interesting work underway in this area:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apache Flink based writing with a RocksDB state store backed indexing mechanism, unlocking true streaming upserts on data lakes. "),(0,o.kt)("li",{parentName:"ul"},"A brand new MetadataIndex, which reimagines the bloom index today on top of the metadata table in Hudi."),(0,o.kt)("li",{parentName:"ul"},"Record level index implementation, as a secondary index using another Hudi table.")),(0,o.kt)("p",null,"Going forward, this will remain an area of active investment for the project. we are always looking for contributors who can drive these roadmap items forward.\nPlease ",(0,o.kt)("a",{parentName:"p",href:"/contribute/get-involved"},"engage")," with our community if you want to get involved."))}c.isMDXComponent=!0},7229:function(e,t,n){t.Z=n.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},2260:function(e,t,n){t.Z=n.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},9517:function(e,t,n){t.Z=n.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},6907:function(e,t,n){t.Z=n.p+"assets/images/with-and-without-index-0ff8ca7135db449da92408fc0d0f6bda.png"}}]);