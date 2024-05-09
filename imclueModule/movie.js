
//1위 영화제목 출력
async function movie(){
    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240507'
    let result = await fetch(url);
    result = await result.json();
   const movieNm = result.boxOfficeResult.dailyBoxOfficeList[0].movieNm
   console.log("movie", movieNm)
    return movieNm;
}


module.exports = movie