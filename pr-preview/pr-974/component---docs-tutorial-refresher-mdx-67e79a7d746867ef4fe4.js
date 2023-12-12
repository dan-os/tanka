(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Xb6S:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return l})),s.d(e,"default",(function(){return i}));var t=s("wx14"),n=s("Ff2n"),m=(s("q1tI"),s("7ljp")),p=s("hhGP"),c=s("Z+0r");s("qKvR");const b=["components"],l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/tutorial/refresher.mdx"}});const N={_frontmatter:l},r=p.a;function i(a){let{components:e}=a,s=Object(n.a)(a,b);return Object(m.b)(r,Object(t.a)({},N,s,{components:e,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"refresher-on-deploying"},"Refresher on deploying"),Object(m.b)("h2",{id:"deploying-to-kubernetes-using-kubectl"},"Deploying to Kubernetes using kubectl"),Object(m.b)("p",null,"To understand how Tanka works, it is important to know what steps are required\nfor the task of deploying Grafana and Prometheus to Kubernetes:"),Object(m.b)("ol",null,Object(m.b)("li",{parentName:"ol"},"Prometheus",Object(m.b)("ul",{parentName:"li"},Object(m.b)("li",{parentName:"ul"},"A ",Object(m.b)("inlineCode",{parentName:"li"},"Deployment")," must be created, to run the ",Object(m.b)("inlineCode",{parentName:"li"},"prom/prometheus")," image"),Object(m.b)("li",{parentName:"ul"},"Also a ",Object(m.b)("inlineCode",{parentName:"li"},"Service")," is needed for Grafana to be able to connect port ",Object(m.b)("inlineCode",{parentName:"li"},"9090")," of\nPrometheus."))),Object(m.b)("li",{parentName:"ol"},"Grafana",Object(m.b)("ul",{parentName:"li"},Object(m.b)("li",{parentName:"ul"},"Another ",Object(m.b)("inlineCode",{parentName:"li"},"Deployment")," is required for the Grafana server."),Object(m.b)("li",{parentName:"ul"},"To connect to the web interface, we will be using a ",Object(m.b)("inlineCode",{parentName:"li"},"Service")," of type\n",Object(m.b)("inlineCode",{parentName:"li"},"NodePort"),".")))),Object(m.b)("p",null,"Before taking a look how Tanka can help doing so, let's recall how to do it with\nplain ",Object(m.b)("inlineCode",{parentName:"p"},"kubectl"),"."),Object(m.b)("h2",{id:"writing-the-yaml"},"Writing the yaml"),Object(m.b)("p",null,Object(m.b)("inlineCode",{parentName:"p"},"kubectl")," expects the resources it should create in ",Object(m.b)("inlineCode",{parentName:"p"},".yaml")," format. For Grafana\n..."),Object(m.b)("h5",{id:"grafanayaml"},"grafana.yaml:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"yaml"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Grafana server Deployment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"apiVersion"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"apps/v1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Deployment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"selector"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"matchLabels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"labels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"containers"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"image"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana/grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"          "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"          "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"ports"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"            "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"containerPort"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"3000")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"              "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"ui")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"---")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Grafana UI Service NodePort")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"apiVersion"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"v1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Service")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"labels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"ports"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana-ui")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"port"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"3000")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"targetPort"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"3000")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"selector"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"grafana")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"type"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"NodePort")))),Object(m.b)("p",null,"... and for Prometheus:"),Object(m.b)("h5",{id:"prometheusyaml"},"prometheus.yaml"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"yaml"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Prometheus server Deployment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"apiVersion"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"apps/v1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Deployment")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"selector"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"matchLabels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"template"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"labels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"containers"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"        "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"image"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prom/prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"          "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"          "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"ports"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"            "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"containerPort"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"9090")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"              "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"api")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"---")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Prometheus API Service")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"apiVersion"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"v1")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"kind"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"Service")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"metadata"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"labels"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk11"},"spec"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"ports"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk5"},"-"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus-api")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"port"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"9090")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"      "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"targetPort"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk4"},"9090")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"  "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"selector"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"    "),Object(m.b)("span",{parentName:"span",className:"mtk11"},"name"),Object(m.b)("span",{parentName:"span",className:"mtk5"},":"),Object(m.b)("span",{parentName:"span",className:"mtk1"}," "),Object(m.b)("span",{parentName:"span",className:"mtk6"},"prometheus")))),Object(m.b)("p",null,"That's pretty verbose, right?"),Object(m.b)("p",null,"Even worse, there are labels and matchers (e.g. ",Object(m.b)("inlineCode",{parentName:"p"},"prometheus"),") that need to be\nexactly the same scattered across the file. It's a nightmare to debug and\nfurthermore harms readability a lot."),Object(m.b)("h2",{id:"deploying-to-the-cluster"},"Deploying to the cluster"),Object(m.b)("p",null,"To actually apply those resources, copy them into ",Object(m.b)("inlineCode",{parentName:"p"},".yaml")," files and use:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ kubectl apply -f prometheus.yaml -f grafana.yaml")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"deployment.apps/grafana created")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"deployment.apps/prometheus created")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"service/grafana created")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"service/prometheus created")))),Object(m.b)("h2",{id:"checking-it-worked"},"Checking it worked"),Object(m.b)("p",null,"So far so good, but can we tell it actually did what we wanted? Let's test that\nGrafana can connect to Prometheus!"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk3 mtki"},"# Temporarily forward Grafana to localhost")),"\n",Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"kubectl port-forward deployments/grafana 8080:3000")))),Object(m.b)("p",null,"Now go to http://localhost:8080 in your browser and login using ",Object(m.b)("inlineCode",{parentName:"p"},"admin:admin"),".\nThen navigate to ",Object(m.b)("inlineCode",{parentName:"p"},"Connections > Data Sources > Add data source"),", choose\n",Object(m.b)("inlineCode",{parentName:"p"},"Prometheus")," as type and enter ",Object(m.b)("inlineCode",{parentName:"p"},"http://prometheus:9090")," as URL. Hit\n",Object(m.b)("inlineCode",{parentName:"p"},"Save & Test")," which should yield a big green bar telling you everything is good."),Object(m.b)("p",null,"Cool! This worked out well for this small example, but the ",Object(m.b)("inlineCode",{parentName:"p"},".yaml")," files are\nhard to read and maintain. Especially when you need to deploy this exact same\nthing in ",Object(m.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(m.b)("inlineCode",{parentName:"p"},"prod")," your choices are very limited."),Object(m.b)("p",null,"Let's explore how Tanka can help us here in the next section!"),Object(m.b)("h2",{id:"cleaning-up"},"Cleaning up"),Object(m.b)("p",null,"Let's remove everything we created to start fresh with Jsonnet in the next section:"),Object(m.b)("pre",{className:"material-theme-darker vscode-highlight","data-language":"bash"},Object(m.b)("code",{parentName:"pre",className:"vscode-highlight-code"},Object(m.b)("span",{parentName:"code",className:"vscode-highlight-line"},Object(m.b)("span",{parentName:"span",className:"mtk1"},"$ kubectl delete -f prometheus.yaml -f grafana.yaml")))),Object(m.b)(c.a,{prev:"/tutorial/overview",next:"/tutorial/jsonnet",mdxType:"TutorialButtons"}),Object(m.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .material-theme-darker {\nbackground-color: #212121;\ncolor: #EEFFFF;\n}\n\n.material-theme-darker .mtk1 { color: #FFFFFF; }\n.material-theme-darker .mtk2 { color: #212121; }\n.material-theme-darker .mtk3 { color: #545454; }\n.material-theme-darker .mtk4 { color: #F78C6C; }\n.material-theme-darker .mtk5 { color: #89DDFF; }\n.material-theme-darker .mtk6 { color: #C3E88D; }\n.material-theme-darker .mtk7 { color: #FFCB6B; }\n.material-theme-darker .mtk8 { color: #EEFFFF; }\n.material-theme-darker .mtk9 { color: #82AAFF; }\n.material-theme-darker .mtk10 { color: #FF5370; }\n.material-theme-darker .mtk11 { color: #F07178; }\n.material-theme-darker .mtk12 { color: #C792EA; }\n.material-theme-darker .mtk13 { color: #EEFFFF90; }\n.material-theme-darker .mtk14 { color: #65737E; }\n.material-theme-darker .mtk15 { color: #B2CCD6; }\n.material-theme-darker .mtk16 { color: #C17E70; }\n.material-theme-darker .mtki { font-style: italic; }\n.material-theme-darker .mtkb { font-weight: bold; }\n.material-theme-darker .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!Object.prototype.hasOwnProperty.call(i,"__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/tutorial/refresher.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-tutorial-refresher-mdx-67e79a7d746867ef4fe4.js.map