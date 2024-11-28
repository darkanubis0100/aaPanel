System.register(["./page_layout-legacy.js?v=1732601582185"],(function(e,s){"use strict";var t,i;return{setters:[e=>{t=e.i,i=e.a8}],execute:function(){const{t:s}=t.global;e("aJ",(e=>i.post("/site?action=AddSite",{...e,webname:JSON.stringify(e.webname)},{requestOptions:{loading:s("WP.api.tamper_7")}}))),e("aK",(e=>i.post("/site?action=create_website_multiple",{create_type:"txt",websites_content:JSON.stringify(e.websites_content)},{requestOptions:{loading:s("WP.api.tamper_7")}}))),e("aL",(e=>i.post("/site?action=AddSite",{...e,webname:JSON.stringify(e.webname)},{requestOptions:{loading:s("WP.api.tamper_7")}}))),e("aM",(e=>i.post("/site?action=deploy_wp",e,{requestOptions:{loading:s("Site.Api.Index_1"),successMessage:!0}}))),e("b5",((e,t=!1)=>i.post("/site?action=DeleteSite",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("b4",(e=>i.post("/site?action=check_del_data",{ids:JSON.stringify(e.ids)}))),e("f",(e=>i.post("/data?action=getData",e))),e("c",(()=>i.post("/site?action=get_site_types"))),e("bb",(e=>i.post("/site?action=add_site_type",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("bc",(e=>i.post("/site?action=modify_site_type_name",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ba",(e=>i.post("/site?action=remove_site_type",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("b3",(e=>i.post("/site?action=set_site_type",{...e,site_ids:JSON.stringify(e.site_ids)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aN",(()=>i.post("/site?action=GetDefaultSite"))),e("aO",(e=>i.post("/site?action=SetDefaultSite",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("b",(()=>i.post("/config?action=get_cli_php_version"))),e("aq",(()=>i.post("/site?action=GetPHPVersion"))),e("aI",(()=>i.post("/site?action=get_language"))),e("aP",(e=>i.post("/config?action=set_cli_php_version",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("b2",(e=>i.post("/site?action=set_site_php_version_multiple",e,{requestOptions:{loading:s("WP.api.tamper_8")}}))),e("d",((e,t,a=!0)=>i.post("/site?action="+(e?"SiteStart":"SiteStop"),t,{requestOptions:{loading:a?s("WP.api.tamper_8"):"",successMessage:a}}))),e("e",((e,t=!0)=>i.post("/site?action=ToBackup",e,{requestOptions:{loading:t?s("WP.api.tamper_9"):"",successMessage:t}}))),e("b7",(e=>i.post("/data?action=getData",{...e,table:"backup",type:"0"}))),e("b8",(e=>i.post("/files?action=restore_website",e,{requestOptions:{successMessage:!0}}))),e("b9",(()=>i.post("/files?action=get_progress"))),e("b6",((e,t=!0)=>i.post("/site?action=DelBackup",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("s",((e,t=!0)=>i.post("/site?action=SetEdate",e,{requestOptions:{loading:t?s("Site.Api.Index_2"):"",successMessage:t}}))),e("h",(e=>i.post("/data?action=setPs",{...e,table:"sites"},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("Z",(e=>i.post("/data?action=getData",{table:"domain",list:"True",search:e.id}))),e("_",(e=>i.post("/site?action=AddDomain",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("Y",((e,t=!0)=>i.post("/site?action=DelDomain",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t,errorMessage:t}}))),e("aU",(e=>i.post("/site?action=GetDirBinding",e))),e("aR",(e=>i.post("/site?action=AddDirBinding",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aS",(e=>i.post("/site?action=GetDirRewrite",e,{requestOptions:{loading:s("WP.api.tamper_8"),errorMessage:!1}}))),e("aT",(e=>i.post("/site?action=GetDirRewrite",{...e,add:1},{requestOptions:{loading:s("WP.api.tamper_8")}}))),e("aQ",((e,t=!0)=>i.post("/site?action=DelDirBinding",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("a5",(e=>i.post("/data?action=getKey",{...e,key:"path",table:"sites"}))),e("a6",(e=>i.post("/site?action=GetDirUserINI",e))),e("$",(e=>i.post("/site?action=SetPath",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a0",(e=>i.post("/site?action=SetSiteRunPath",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a1",(e=>i.post("/site?action=SetDirUserINI",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a2",(e=>i.post("/site?action=logsOpen",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a3",(e=>i.post("/site?action=CloseHasPwd",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a4",(e=>i.post("/site?action=SetHasPwd",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ay",(e=>i.post("/site?action=get_dir_auth",e))),e("aw",(e=>i.post("/site?action=set_dir_auth",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("av",(e=>i.post("/site?action=modify_dir_auth_pass",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ax",((e,t=!0)=>i.post("/site?action=delete_dir_auth",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("aC",(e=>i.post("/config?action=get_file_deny",e))),e("aA",(e=>i.post("/config?action=set_file_deny",{...e,act:"add"},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("az",(e=>i.post("/config?action=set_file_deny",{...e,act:"edit"},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aB",((e,t=!0)=>i.post("/config?action=del_file_deny",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("am",(e=>i.post("/site?action=GetLimitNet",e))),e("al",(e=>i.post("/site?action=SetLimitNet",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ak",(e=>i.post("/site?action=CloseLimitNet",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aV",(e=>i.post("/site?action=GetIndex",e))),e("bg",(e=>i.post("/site?action=GetRewriteList",e))),e("bf",(e=>i.post("/site?action=SetRewriteTel",e,{requestOptions:{loading:s("Site.Api.Index_2"),successMessage:!0}}))),e("aW",(e=>i.post("/site?action=SetIndex",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ap",(e=>i.post("/site?action=GetSitePHPVersion",e))),e("an",(e=>i.post("/site?action=SetPHPVersion",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ar",(e=>i.post("/config?action=get_php_session_path",e))),e("ao",(e=>i.post("/config?action=set_php_session_path",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aY",(e=>i.post("/site?action=is_update",e))),e("aZ",(e=>i.post("/site?action=get_wp_username",e))),e("as",(e=>i.post("/site?action=update_wp",e,{requestOptions:{loading:s("Site.Api.Index_3"),successMessage:!0}}))),e("at",(e=>i.post("/site?action=set_fastcgi_cache",{...e,act:e.act?"enable":"disable"},{requestOptions:{loading:`${e.act?s("Site.Api.Index_4"):s("Site.Api.Index_5")} ${s("Site.Api.Index_6")}`,successMessage:!0}}))),e("au",(e=>i.post("/site?action=purge_all_cache",e,{requestOptions:{loading:s("Site.Api.Index_7"),successMessage:!0}}))),e("aX",(e=>i.post("/site?action=reset_wp_password",e,{requestOptions:{loading:s("Site.Api.Index_8"),successMessage:!0}}))),e("b1",(e=>i.post("/files?action=get_composer_version",e))),e("a_",(e=>i.post("/files?action=update_composer",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a$",(e=>i.post("/files?action=DeleteFile",{path:`${e.path}/composer.lock`},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("b0",(e=>i.post("/files?action=exec_composer",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ad",(e=>i.post("/site?action=GetRedirectList",e))),e("a7",(e=>i.post("/site?action=CreateRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("a8",(e=>i.post("/site?action=ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ab",(e=>i.post("/site?action=ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ac",((e,t=!0)=>i.post("/site?action=DeleteRedirect",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("a9",(e=>i.post("/site?action=GetRedirectFile",e))),e("aa",(e=>i.post("/site?action=SaveRedirectFile",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("aj",(e=>i.post("/site?action=GetProxyList",e))),e("ae",(e=>i.post("/site?action=CreateProxy",{...e,subfilter:JSON.stringify(e.subfilter)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("af",(e=>i.post("/site?action=ModifyProxy",{...e,subfilter:JSON.stringify(e.subfilter)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("ai",((e,t=!0)=>i.post("/site?action=RemoveProxy",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("ag",(e=>i.post("/site?action=GetProxyFile",e))),e("ah",(e=>i.post("/site?action=SaveProxyFile",e,{requestOptions:{loading:s("Site.Api.Index_9"),successMessage:!0}}))),e("U",((e,t=!0)=>i.post("/site?action=GetSecurity",e,{requestOptions:{loading:t?s("Site.Api.Index_10"):""}}))),e("aD",((e,t=!0)=>i.post("/site?action=SetSecurity",e,{requestOptions:{loading:t?s("Site.Api.Index_9"):"",successMessage:!0}}))),e("aE",(e=>i.post("/site?action=GetSiteLogs",e))),e("aF",(e=>i.post("/site?action=get_site_err_log",e))),e("aH",(e=>i.post(`/ajax?action=get_result&path=${e.path}`))),e("aG",(e=>i.post(`/ajax?action=log_analysis&path=${e.path}`))),e("g",(e=>i.post(`/ajax?action=speed_log&path=${e.path}`))),e("a",(e=>i.post(`/ajax?action=get_detailed&path=${e.path}&type=${e.type}`))),e("bd",(e=>i.post("/mod/proxy/com/create",e,{requestOptions:{loading:s("Site.Api.Index_9"),successMessage:!0}}))),e("X",(e=>i.post("/mod/proxy/com/get_list",e))),e("be",((e,t=!1)=>i.post("/mod/proxy/com/delete",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t}}))),e("W",(e=>i.post("/data?action=setPs",{...e,table:"sites"},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("i",(e=>i.post("/mod/proxy/com/get_global_conf",e))),e("l",(e=>i.post("/mod/proxy/com/get_domain_list",e))),e("m",(e=>i.post("/mod/proxy/com/add_domain",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("k",((e,t=!0)=>i.post("/mod/proxy/com/del_domain",e,{requestOptions:{loading:t?s("WP.api.tamper_8"):"",successMessage:t,errorMessage:t}}))),e("j",(e=>i.post("/mod/proxy/com/get_proxy_list",e))),e("R",(e=>i.post("/mod/proxy/com/set_url_remark",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("H",(e=>i.post("/mod/proxy/com/add_proxy",e,{requestOptions:{loading:s("Site.Api.Index_9"),successMessage:!0}}))),e("S",(e=>i.post("/mod/proxy/com/del_url_proxy",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("N",(e=>i.post("/mod/proxy/com/set_url_proxy",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("O",(e=>i.post("/mod/proxy/com/set_url_custom_conf",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("P",(e=>i.post("/mod/proxy/com/add_sub_filter",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("Q",(e=>i.post("/mod/proxy/com/del_sub_filter",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("L",(e=>i.post("/mod/proxy/com/set_url_cache",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("I",(e=>i.post("/mod/proxy/com/add_url_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("J",(e=>i.post("/mod/proxy/com/del_url_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("K",(e=>i.post("/mod/proxy/com/del_url_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("M",(e=>i.post("/mod/proxy/com/set_url_gzip",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("u",(e=>i.post("/mod/proxy/com/set_global_cache",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("v",(e=>i.post("/mod/proxy/com/clear_cache",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("w",(e=>i.post("/mod/proxy/com/set_global_gzip",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("n",(e=>i.post("/mod/proxy/com/add_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("o",(e=>i.post("/mod/proxy/com/del_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("p",(e=>i.post("/mod/proxy/com/batch_del_ip_limit",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("r",(e=>i.post("/mod/proxy/com/add_dir_auth",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("q",(e=>i.post("/mod/proxy/com/set_dir_auth",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("t",(e=>i.post("/mod/proxy/com/del_dir_auth",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("x",(e=>i.post("/mod/proxy/com/set_global_log",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("y",(e=>i.post("/mod/proxy/com/set_global_websocket",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("z",(e=>i.post("/mod/proxy/com/get_config",e))),e("A",(e=>i.post("/mod/proxy/com/save_config",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("G",(e=>i.post("/project/proxy/get_project_redirect_list",e))),e("F",(e=>i.post("/mod/proxy/com/DeleteRedirect",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("B",(e=>i.post("/mod/proxy/com/CreateRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("C",(e=>i.post("/mod/proxy/com/ModifyRedirect",{...e,redirectdomain:JSON.stringify(e.redirectdomain)},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("D",(e=>i.post("/mod/proxy/com/GetRedirectFile",e))),e("E",(e=>i.post("/files?action=SaveFileBody",e,{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),e("V",(e=>i.post("/mod/proxy/com/GetSiteLogs",e))),e("T",(e=>i.post("/site?action=SetSecurity",e,{requestOptions:{loading:s("Site.Api.Index_9"),successMessage:!0}})))}}}));
