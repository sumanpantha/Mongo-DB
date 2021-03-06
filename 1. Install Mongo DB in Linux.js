
# Step 1 – Add MongoDB Yum Repository

[root@centosmn ~]# vi /etc/yum.repos.d/mongodb.repo

Add following content in yum repository configuration file mongodb.repo as per your required MongoDB version and system architecture. For this article, we are using MongoDB 4.0 repository

[MongoDB]
name=MongoDB Repository
baseurl=http://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=0
enabled=1

# Step 2 – Install MongoDB Server

Let’s use the yum package manager to install mongodb-org package, it will automatically install all its dependencies. To install any specific revision of MongoDB specify package name with version like mongodb-org-4.0.0. The following command will install latest stable version available.

[root@centosmn ~]# yum install mongodb-org

# Step 3 – Start/Stop MongoDB Service

[root@centosmn ~]# systemctl enable mongod

[root@centosmn ~]# systemctl start mongod

[root@centosmn ~]# systemctl status mongod

[root@centosmn ~]# systemctl stop mongod

# Configure MongoDB to autostart on system boot.

[root@centosmn ~]# chkconfig mongod on

# Backup Config file

[root@centosmn etc]# cp -r /etc/mongod.conf /etc/mongod.conf_bak 

# Step 4 – Check MongoDB Version

[root@centosmn ~]# mongo --version

[root@centosmn ~]# mongo --nodb

# Step 5 - Connect MongoDB 

[root@centosmn ~]# mongo

# Setp 6 - MongoDB Config file

[root@centosmn ~]# cat /etc/mongod.conf

# Where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# Where and how to store data.
storage:
  dbPath: /var/lib/mongo
  journal:
    enabled: true


