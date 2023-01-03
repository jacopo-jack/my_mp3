android =".MP3Service"
action ="com.example.androidmp3.action.PLAYPAUSE"
scheme="content"
mimetype="audio"
path ="mp3path"
class MP3Service extends{
ib =new MP3Binder();
finalStringACTION_PLAYPAUSE = android.app.Service.extend(com.example.androidmp3.action.PLAYPAUSE);
MediaPlayer= mp;
MP3BinderextendsBinder() {
 MP3ServicegetService() 
 return MP3Service.this;
 this.onCreate()
    mp = new this.MediaPlayer();
 }
 }


 public: onStartCommand(Intent )
 action = intent.getAction();
 path = intent.getExtras().getString(mp3Path);
 if (action.equals(ACTION_PLAYPAUSE))
 playpauseMp3(path);
 //return START_NOT_STICKY;

 public: onBind (Intent) 
 //return ib;

 public: void onDestroy() 
 nm.cancel(NOT_ID);
 mp.release();
 
 playpauseMp3()
 private: currentPath;
 private: State.Stopped 
 Playing,
 Paused,
 Stopped

 private: state = State.Stopped;
 private: void playpauseMp3(String) 
 try {
 if ( (state == State.Playing) && 
 (path.equals(currentPath)) )
 {
 pauseMp3();
 } else {
 if ( (state == State.Stopped) || 
 (!path.equals(currentPath)) )
 {
 mp.reset();
 mp.setAudioStreamType(AudioManager.
 STREAM_MUSIC);
 mp.setDataSource(path);
 mp.prepare();
 }
 mp.start();
 state = State.Playing;
 currentPath = path;
 }
 } catch (Exception) {
 Log.e(TAG, message  + e.getMessage());
 e.printStackTrace();
 }
 
 private: void pauseMp3() 
 try {
 mp.pause();
 state = State.Paused;
 updateNotification(paused);
 } catch (Exception ) {
 Log.e(TAG, message  + e.getMessage());
 e.printStackTrace();
 }
 
private: void playpauseMp3(String ) 
 Intent  = new Intent(MP3Service.ACTION_PLAYPAUSE);
 intent.putExtra(mp3Path , mp3Path);
 startService(intent);
 
 onCreate()
 private: nm;
 private: notification = null;
 private: NOT_ID = 1;
 nm = (NotificationManager) 
 getSystemService(NOTIFICATION_SERVICE); notification 
 = new Notification(); notification.icon = R.drawable.icon;



































