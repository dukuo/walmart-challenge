HOST=$1
PORT=27017
FILES=$(ls ./*.json | sort -n -t _ -k 2)
MONGO_USER=productListUser
MONG_PASS=productListPassword

while : ; do
    CHECK=$(mongo --host ${HOST} --username ${MONGO_USER} --password ${MONGO_PASS} --authenticationDatabase admin promotions --eval 'db.version() 2> /dev/null')
    echo $CHECK
    if [[ $CHECK == *"MongoDB shell version v3.6.8"* ]];
    then
        break
    fi
    echo "[$(date)] Checking connection to database... 😴"
    sleep 1
done

echo "[$(date)] Connected! 🤙"

for AFILE in ${FILES[@]}
do
    echo -e "[$(date)] Processing \t$AFILE"
    COLLECTION=`echo $AFILE | sed -n 's/.*\-\(.*\).json/\1/p'`
    mongoimport --host ${HOST} --port ${PORT} --username ${MONGO_USER} --password productListPassword --authenticationDatabase admin --db promotions --collection ${COLLECTION} --mode upsert --file ${AFILE}
    echo -e "[$(date)] Done \t\t$AFILE"
done

echo "[$(date)] No more files to process 🍻"
