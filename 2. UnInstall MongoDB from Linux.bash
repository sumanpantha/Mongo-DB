Remove MongoDB on CentOS Linux

1.Stop MongoDB

[root@centosmn ~]# systemctl stop mongod

2.Remove Packages.

[root@centosmn ~]#  yum erase $(rpm -qa | grep mongodb-org)

3.Remove Data Directories.

[root@centosmn ~]# rm -rf /var/log/mongodb
[root@centosmn ~]# rm -rf /var/lib/mongo
