# Enable Authentication

*To Enable Authentication, Need to change in the Mongo Config files. Before changing the config file need to stop MongoDB services.*

[root@centosmn ~]# systemctl stop mongod

[root@centosmn ~]# vi /etc/mongod.conf

Add on Config File (must have space after the colon in enabled (: enabled))

/*

#security:

security.authorization: enabled

*/
Then start Mongod

[root@centosmn ~]# systemctl start mongod

# Now Connect to the MongoDB with authentication

[root@centosmn ~]# mongo --host 127.0.0.1 --port 27017 -u superadmin -p Admin@P@55w0rd

[root@centosmn ~]# mongo --host 127.0.0.1 --port 27017 -u superadmin -p Admin@P@55w0rd --aut
henticationDatabase admin


# Login to EightSquare Database with User1 

[root@centosmn ~]# mongo --host 127.0.0.1 --port 27017 -u User1 -p User1@P@55w0rd --authenticationDatabase EightSquare



# Backup After the Authentication Enable 

**Make a directory for the Backup file**

[root@centosmn ~]# mkdir -p /home/BackUpMongoDB/MongoFullBackup/dump/

Syntax: mongodump --host <IP_ADDRESS> --port <PORT> -u <USERNAME> -p <PASSWORD> --authenticationDatabase <AUTHENTICATION_DATABASE> -d <DATABASE_NAME> --out <BACKUP_DIRECTORY>

**Backup All Databases** 

[root@centosmn ~]# mongodump --host 127.0.0.1 --port 27017 -u superadmin -p Admin@P@55w0rd --authenticationDatabase admin --out /home/BackUpMongoDB/MongoFullBackup/dump/

**Backup Particular Database** 

[root@centosmn ~]# mongodump --host 127.0.0.1 --port 27017 -u superadmin -p Admin@P@55w0rd --authenticationDatabase admin -d EightSquare --out /home/BackUpMongoDB/MongoFullBackup/dump/

# Restore Backup 

**Restore all the Backuped Databases**

[root@centosmn ~]# mongorestore --host 127.0.0.1:27017 -u superadmin -p Admin@P@55w0rd --authenticationDatabase admin /home/BackUpMongoDB/MongoFullBackup/dump/

**Restore only Particular Database**

mongorestore --host 127.0.0.1:27017 -u User1 -p User1@P@55w0rd --authenticationDatabase EightSquare -d EightSquare /home/BackUpMongoDB/MongoFullBackup/dump/EightSquare

