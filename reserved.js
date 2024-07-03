function exportCalendarData() {
  const calendar = CalendarApp.getCalendarById('70259cbd7a4343f1af81671d1380e6bb84bb2fd0d3815e454ade4a337d9ec88f@group.calendar.google.com');
  // 本日から2ヶ月先までの予定を取得
  const startDate = new Date();
  const endDate = new Date();
  endDate.setMonth(startDate.getMonth() + 2);

  const events = calendar.getEvents(startDate, endDate);

  events.forEach(function(event){
    //説明文に「トレーナー :陶山昌宏」または「トレーナー :岡田悠佳」が含まれていて、かつタイトル名に「ピラティス」または「予約不可」が含まれている予定のみ取得
    //説明文に「フリガナ（セイ） :シーエス」が含まれているものを除く
    if(event.getDescription().indexOf("トレーナー :陶山昌宏") != -1 || event.getDescription().indexOf("トレーナー :岡田悠佳") != -1){
      if(event.getTitle().indexOf("ピラティス") != -1 || event.getTitle().indexOf("予約不可") != -1){
        if(event.getDescription().indexOf("フリガナ（セイ） :シーエス") == -1){
        const startTime = event.getStartTime();
        const endTime = event.getEndTime();
        const title = event.getTitle();
        const description = event.getDescription();
        Logger.log(startTime);
        Logger.log(endTime);
        Logger.log(title);
        Logger.log(description);
        }
      }
    }
  }
  );
}
