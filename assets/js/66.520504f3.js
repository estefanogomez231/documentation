(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{411:function(e,a,t){"use strict";t.r(a);var s=t(48),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"additional-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[e._v("#")]),e._v(" Additional Configuration")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#backups"}},[e._v("Backups")]),t("ul",[t("li",[t("a",{attrs:{href:"#using-local-backups"}},[e._v("Using Local Backups")])]),t("li",[t("a",{attrs:{href:"#using-s3-backups"}},[e._v("Using S3 Backups")])])])]),t("li",[t("a",{attrs:{href:"#reverse-proxy-setup"}},[e._v("Reverse Proxy Setup")]),t("ul",[t("li",[t("a",{attrs:{href:"#nginx-specific-configuration"}},[e._v("NGINX Specific Configuration")])]),t("li",[t("a",{attrs:{href:"#cloudflare-specific-configuration"}},[e._v("Cloudflare Specific Configuration")])])])]),t("li",[t("a",{attrs:{href:"#recaptcha"}},[e._v("reCAPTCHA")]),t("ul",[t("li",[t("a",{attrs:{href:"#configuring-recaptcha"}},[e._v("Configuring reCAPTCHA")])]),t("li",[t("a",{attrs:{href:"#disabling-recaptcha"}},[e._v("Disabling reCAPTCHA")])])])]),t("li",[t("a",{attrs:{href:"#_2fa"}},[e._v("2FA")]),t("ul",[t("li",[t("a",{attrs:{href:"#disable-2fa-requirement"}},[e._v("Disable 2FA requirement")])]),t("li",[t("a",{attrs:{href:"#disable-2fa-for-a-specific-user"}},[e._v("Disable 2FA for a specific user")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),t("p",[e._v("Pterodactyl Panel allows users to create backups of their servers. In order to create backups, a backup storage method has to be configured.")]),e._v(" "),t("p",[e._v("When changing Pterodactyl Panel's backup storage method, users may still download or delete existing backups from the prior storage driver. In the instance of migrating from S3 to local backups, S3 credentials must remain configured after switching to the local backup storage method.")]),e._v(" "),t("h3",{attrs:{id:"using-local-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-local-backups"}},[e._v("#")]),e._v(" Using Local Backups")]),e._v(" "),t("p",[e._v("By default, Pterodactyl Panel uses local storage via Wings for backups. That said, this method of backup storage can be explicitly set with the following configuration in the "),t("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sets your panel to use local storage via Wings for backups")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("APP_BACKUP_DRIVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wings\n")])])]),t("p",[e._v("Do note that, when using local storage via Wings, the destination for backups is set in Wings' "),t("code",[e._v("config.yml")]),e._v(" with the following setting key:")]),e._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("system")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("backup_directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /path/to/backup/storage\n")])])]),t("h3",{attrs:{id:"using-s3-backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-s3-backups"}},[e._v("#")]),e._v(" Using S3 Backups")]),e._v(" "),t("p",[e._v("AWS S3 (or compatible storage) can be used to store remote or cloud-based backups. The following configuration options have to be set in the "),t("code",[e._v(".env")]),e._v(" file or as environment variables in order to enable it:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sets your panel to use s3 for backups")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("APP_BACKUP_DRIVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("s3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Info to actually use s3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_DEFAULT_REGION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_ACCESS_KEY_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_SECRET_ACCESS_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_BACKUPS_BUCKET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_ENDPOINT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n")])])]),t("p",[e._v("For some configurations, you might have to change your S3 URL from "),t("code",[e._v("bucket.domain.com")]),e._v(" to "),t("code",[e._v("domain.com/bucket")]),e._v(". To accomplish this, add "),t("code",[e._v("AWS_USE_PATH_STYLE_ENDPOINT=true")]),e._v(" to your "),t("code",[e._v(".env")]),e._v(" file.")]),e._v(" "),t("p",[e._v("The S3 backup is using the S3 multipart upload capabilities. In rare situations, you might want to adjust the size of a single part or the lifespan of the generated pre-signed URLs. The default part size is 5GB, and the default pre-signed URL lifespan is 60 minutes. You can configure the maximal part size using the "),t("code",[e._v("BACKUP_MAX_PART_SIZE")]),e._v(" environment variable. You must specify the size in bytes. To define the pre-signed URL lifespan, use the "),t("code",[e._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),e._v(" variable. The expected unit is minutes.")]),e._v(" "),t("p",[e._v("The following "),t("code",[e._v(".env")]),e._v(" snippet configures 1GB parts and uses 120 minutes as the pre-signed URL lifespan:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BACKUP_MAX_PART_SIZE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1073741824")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("\n")])])]),t("h2",{attrs:{id:"reverse-proxy-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-setup"}},[e._v("#")]),e._v(" Reverse Proxy Setup")]),e._v(" "),t("p",[e._v("When running Pterodactyl behind a reverse proxy, such as "),t("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare's Flexible SSL"),t("OutboundLink")],1),e._v("\nor Nginx/Apache/Caddy, etc., you will need to make a quick modification to the Panel to ensure things continue to work as expected. By default, when using these reverse proxies,\nyour Panel will not correctly handle requests. You'll most likely be unable to login or see security warnings in your browser console as it attempts to load insecure assets.\nThis is because the internal logic the Panel uses to determine how links should be generated thinks it is running over HTTP and not over HTTPS.")]),e._v(" "),t("p",[e._v("You will need to edit the "),t("code",[e._v(".env")]),e._v(" file in the Panel's root directory to contain "),t("code",[e._v("TRUSTED_PROXIES=*")]),e._v(" at minimum. We highly suggest providing a specific IP address\n(or comma-separated list of IPs) rather than allowing "),t("code",[e._v("*")]),e._v(". For example, if your proxy is running on the same machine as the server,\nthe chances are that something like "),t("code",[e._v("TRUSTED_PROXIES=127.0.0.1")]),e._v(" will work for you.")]),e._v(" "),t("h3",{attrs:{id:"nginx-specific-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-specific-configuration"}},[e._v("#")]),e._v(" NGINX Specific Configuration")]),e._v(" "),t("p",[e._v("For Pterodactyl to properly respond to an NGINX reverse proxy, the NGINX "),t("code",[e._v("location")]),e._v(" config must contain the following lines:")]),e._v(" "),t("div",{staticClass:"language-Nginx extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Real"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Host "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Proto "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$scheme")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_redirect")]),e._v(" off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_buffering")]),e._v(" off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nproxy_request_buffering off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h3",{attrs:{id:"cloudflare-specific-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-specific-configuration"}},[e._v("#")]),e._v(" Cloudflare Specific Configuration")]),e._v(" "),t("p",[e._v("If you're using Cloudflare's Flexible SSL you should set "),t("code",[e._v("TRUSTED_PROXIES")]),e._v(" to contain "),t("a",{attrs:{href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"}},[e._v("their IP addresses"),t("OutboundLink")],1),e._v(".\nBelow is an example of how to set this.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")])])]),t("h2",{attrs:{id:"recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recaptcha"}},[e._v("#")]),e._v(" reCAPTCHA")]),e._v(" "),t("p",[e._v("The Panel uses invisible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.")]),e._v(" "),t("h3",{attrs:{id:"configuring-recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-recaptcha"}},[e._v("#")]),e._v(" Configuring reCAPTCHA")]),e._v(" "),t("p",[e._v("While we provide a global Site Key and Secret Key by default, we highly recommend changing it for your own setup.")]),e._v(" "),t("p",[e._v("You can generate your own keys in the "),t("a",{attrs:{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("reCAPTCHA Admin Console"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The keys can then be applied using the Settings in the admin panel. The reCAPTCHA settings can be found on the "),t("strong",[e._v("Advanced")]),e._v(" tab.")]),e._v(" "),t("h3",{attrs:{id:"disabling-recaptcha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-recaptcha"}},[e._v("#")]),e._v(" Disabling reCAPTCHA")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("SECURITY WARNING")]),e._v(" "),t("p",[e._v("We do not recommend disabling reCAPTCHA. It is a security mechanism that makes it harder to perform brute-force attacks on user accounts.")])]),e._v(" "),t("p",[e._v("If users have trouble logging in, or your Panel isn't exposed to the internet, it can make sense to disable reCAPTCHA.")]),e._v(" "),t("p",[e._v("reCAPTCHA can easily be disabled using the admin panel. In the Settings, select the "),t("strong",[e._v("Advanced")]),e._v(" tab and set the "),t("strong",[e._v("Status")]),e._v(" of reCAPTCHA to "),t("strong",[e._v("disabled")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"editing-your-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-your-database"}},[e._v("#")]),e._v(" Editing your database")]),e._v(" "),t("p",[e._v("If you cannot access your panel, you can modify the database directly using the following commands.")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" panel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("value")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'false'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'settings::recaptcha:enabled'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"_2fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2fa"}},[e._v("#")]),e._v(" 2FA")]),e._v(" "),t("p",[e._v("If possible you should use the panel to update your 2FA settings. If you can't access your panel for what ever reason you can use the following steps.")]),e._v(" "),t("h3",{attrs:{id:"disable-2fa-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-requirement"}},[e._v("#")]),e._v(" Disable 2FA requirement")]),e._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" panel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("settings "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("value")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'settings::pterodactyl:auth:2fa_required'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h3",{attrs:{id:"disable-2fa-for-a-specific-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-for-a-specific-user"}},[e._v("#")]),e._v(" Disable 2FA for a specific user")]),e._v(" "),t("p",[e._v("Run the following command in your "),t("code",[e._v("/var/www/pterodactyl")]),e._v(" directory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan p:user:disable2fa\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);