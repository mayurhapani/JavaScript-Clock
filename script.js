setInterval(function () {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let day = time.getDate();
  console.log(date, month, year, day);
  var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  document.getElementById("date").innerHTML = date + "-" + month + "-" + year;
  document.getElementById("day").innerHTML = dayOfWeek[day];

  const second = document.querySelector(".second");
  const minute = document.querySelector(".minute");
  const hour = document.querySelector(".hour");

  let sdeg = seconds * 6;
  let mdeg = minutes * 6;
  let hdeg = hours * 30;

  second.style = `--sdeg:${sdeg}deg`;
  minute.style = `--mdeg:${mdeg}deg`;
  hour.style = `--hdeg:${hdeg}deg`;

  second_num0.style = `--c1_second:${-1 * sdeg + 258}deg`;
  second_num1.style = `--c1_second:${-1 * sdeg + 264}deg`;
  second_num1.style = `--c1_second:${-1 * sdeg + 270}deg`;
  second_num2.style = `--c1_second:${-1 * sdeg + 276}deg`;
  second_num3.style = `--c1_second:${-1 * sdeg + 282}deg`;
  second_num4.style = `--c1_second:${-1 * sdeg + 288}deg`;
  second_num5.style = `--c1_second:${-1 * sdeg + 294}deg`;
  second_num6.style = `--c1_second:${-1 * sdeg + 300}deg`;
  second_num7.style = `--c1_second:${-1 * sdeg + 306}deg`;
  second_num8.style = `--c1_second:${-1 * sdeg + 312}deg`;
  second_num9.style = `--c1_second:${-1 * sdeg + 318}deg`;
  second_num10.style = `--c1_second:${-1 * sdeg + 324}deg`;
  second_num11.style = `--c1_second:${-1 * sdeg + 330}deg`;
  second_num12.style = `--c1_second:${-1 * sdeg + 336}deg`;
  second_num13.style = `--c1_second:${-1 * sdeg + 342}deg`;
  second_num14.style = `--c1_second:${-1 * sdeg + 348}deg`;
  second_num15.style = `--c1_second:${-1 * sdeg + 354}deg`;
  second_num16.style = `--c1_second:${-1 * sdeg + 360}deg`;
  second_num17.style = `--c1_second:${-1 * sdeg + 6}deg`;
  second_num18.style = `--c1_second:${-1 * sdeg + 12}deg`;
  second_num19.style = `--c1_second:${-1 * sdeg + 18}deg`;
  second_num20.style = `--c1_second:${-1 * sdeg + 24}deg`;
  second_num21.style = `--c1_second:${-1 * sdeg + 30}deg`;
  second_num22.style = `--c1_second:${-1 * sdeg + 36}deg`;
  second_num23.style = `--c1_second:${-1 * sdeg + 42}deg`;
  second_num24.style = `--c1_second:${-1 * sdeg + 48}deg`;
  second_num25.style = `--c1_second:${-1 * sdeg + 54}deg`;
  second_num26.style = `--c1_second:${-1 * sdeg + 60}deg`;
  second_num27.style = `--c1_second:${-1 * sdeg + 66}deg`;
  second_num28.style = `--c1_second:${-1 * sdeg + 72}deg`;
  second_num29.style = `--c1_second:${-1 * sdeg + 78}deg`;
  second_num30.style = `--c1_second:${-1 * sdeg + 84}deg`;
  second_num31.style = `--c1_second:${-1 * sdeg + 90}deg`;
  second_num32.style = `--c1_second:${-1 * sdeg + 96}deg`;
  second_num33.style = `--c1_second:${-1 * sdeg + 102}deg`;
  second_num34.style = `--c1_second:${-1 * sdeg + 108}deg`;
  second_num35.style = `--c1_second:${-1 * sdeg + 114}deg`;
  second_num36.style = `--c1_second:${-1 * sdeg + 120}deg`;
  second_num37.style = `--c1_second:${-1 * sdeg + 126}deg`;
  second_num38.style = `--c1_second:${-1 * sdeg + 132}deg`;
  second_num39.style = `--c1_second:${-1 * sdeg + 138}deg`;
  second_num40.style = `--c1_second:${-1 * sdeg + 144}deg`;
  second_num41.style = `--c1_second:${-1 * sdeg + 150}deg`;
  second_num42.style = `--c1_second:${-1 * sdeg + 156}deg`;
  second_num43.style = `--c1_second:${-1 * sdeg + 162}deg`;
  second_num44.style = `--c1_second:${-1 * sdeg + 168}deg`;
  second_num45.style = `--c1_second:${-1 * sdeg + 174}deg`;
  second_num46.style = `--c1_second:${-1 * sdeg + 180}deg`;
  second_num47.style = `--c1_second:${-1 * sdeg + 186}deg`;
  second_num48.style = `--c1_second:${-1 * sdeg + 192}deg`;
  second_num49.style = `--c1_second:${-1 * sdeg + 198}deg`;
  second_num50.style = `--c1_second:${-1 * sdeg + 204}deg`;
  second_num51.style = `--c1_second:${-1 * sdeg + 210}deg`;
  second_num52.style = `--c1_second:${-1 * sdeg + 216}deg`;
  second_num53.style = `--c1_second:${-1 * sdeg + 222}deg`;
  second_num54.style = `--c1_second:${-1 * sdeg + 228}deg`;
  second_num55.style = `--c1_second:${-1 * sdeg + 234}deg`;
  second_num56.style = `--c1_second:${-1 * sdeg + 240}deg`;
  second_num57.style = `--c1_second:${-1 * sdeg + 246}deg`;
  second_num58.style = `--c1_second:${-1 * sdeg + 252}deg`;
  second_num59.style = `--c1_second:${-1 * sdeg + 258}deg`;

  minute_num0.style = `--c1_minute:${-1 * mdeg + 264}deg`;
  minute_num1.style = `--c1_minute:${-1 * mdeg + 270}deg`;
  minute_num1.style = `--c1_minute:${-1 * mdeg + 276}deg`;
  minute_num2.style = `--c1_minute:${-1 * mdeg + 282}deg`;
  minute_num3.style = `--c1_minute:${-1 * mdeg + 288}deg`;
  minute_num4.style = `--c1_minute:${-1 * mdeg + 294}deg`;
  minute_num5.style = `--c1_minute:${-1 * mdeg + 300}deg`;
  minute_num6.style = `--c1_minute:${-1 * mdeg + 306}deg`;
  minute_num7.style = `--c1_minute:${-1 * mdeg + 312}deg`;
  minute_num8.style = `--c1_minute:${-1 * mdeg + 318}deg`;
  minute_num9.style = `--c1_minute:${-1 * mdeg + 324}deg`;
  minute_num10.style = `--c1_minute:${-1 * mdeg + 330}deg`;
  minute_num11.style = `--c1_minute:${-1 * mdeg + 336}deg`;
  minute_num12.style = `--c1_minute:${-1 * mdeg + 342}deg`;
  minute_num13.style = `--c1_minute:${-1 * mdeg + 348}deg`;
  minute_num14.style = `--c1_minute:${-1 * mdeg + 354}deg`;
  minute_num15.style = `--c1_minute:${-1 * mdeg + 360}deg`;
  minute_num16.style = `--c1_minute:${-1 * mdeg + 6}deg`;
  minute_num17.style = `--c1_minute:${-1 * mdeg + 12}deg`;
  minute_num18.style = `--c1_minute:${-1 * mdeg + 18}deg`;
  minute_num19.style = `--c1_minute:${-1 * mdeg + 24}deg`;
  minute_num20.style = `--c1_minute:${-1 * mdeg + 30}deg`;
  minute_num21.style = `--c1_minute:${-1 * mdeg + 36}deg`;
  minute_num22.style = `--c1_minute:${-1 * mdeg + 42}deg`;
  minute_num23.style = `--c1_minute:${-1 * mdeg + 48}deg`;
  minute_num24.style = `--c1_minute:${-1 * mdeg + 54}deg`;
  minute_num25.style = `--c1_minute:${-1 * mdeg + 60}deg`;
  minute_num26.style = `--c1_minute:${-1 * mdeg + 66}deg`;
  minute_num27.style = `--c1_minute:${-1 * mdeg + 72}deg`;
  minute_num28.style = `--c1_minute:${-1 * mdeg + 78}deg`;
  minute_num29.style = `--c1_minute:${-1 * mdeg + 84}deg`;
  minute_num30.style = `--c1_minute:${-1 * mdeg + 90}deg`;
  minute_num31.style = `--c1_minute:${-1 * mdeg + 96}deg`;
  minute_num32.style = `--c1_minute:${-1 * mdeg + 102}deg`;
  minute_num33.style = `--c1_minute:${-1 * mdeg + 108}deg`;
  minute_num34.style = `--c1_minute:${-1 * mdeg + 114}deg`;
  minute_num35.style = `--c1_minute:${-1 * mdeg + 120}deg`;
  minute_num36.style = `--c1_minute:${-1 * mdeg + 126}deg`;
  minute_num37.style = `--c1_minute:${-1 * mdeg + 132}deg`;
  minute_num38.style = `--c1_minute:${-1 * mdeg + 138}deg`;
  minute_num39.style = `--c1_minute:${-1 * mdeg + 144}deg`;
  minute_num40.style = `--c1_minute:${-1 * mdeg + 150}deg`;
  minute_num41.style = `--c1_minute:${-1 * mdeg + 156}deg`;
  minute_num42.style = `--c1_minute:${-1 * mdeg + 162}deg`;
  minute_num43.style = `--c1_minute:${-1 * mdeg + 168}deg`;
  minute_num44.style = `--c1_minute:${-1 * mdeg + 174}deg`;
  minute_num45.style = `--c1_minute:${-1 * mdeg + 180}deg`;
  minute_num46.style = `--c1_minute:${-1 * mdeg + 186}deg`;
  minute_num47.style = `--c1_minute:${-1 * mdeg + 192}deg`;
  minute_num48.style = `--c1_minute:${-1 * mdeg + 198}deg`;
  minute_num49.style = `--c1_minute:${-1 * mdeg + 204}deg`;
  minute_num50.style = `--c1_minute:${-1 * mdeg + 210}deg`;
  minute_num51.style = `--c1_minute:${-1 * mdeg + 216}deg`;
  minute_num52.style = `--c1_minute:${-1 * mdeg + 222}deg`;
  minute_num53.style = `--c1_minute:${-1 * mdeg + 228}deg`;
  minute_num54.style = `--c1_minute:${-1 * mdeg + 234}deg`;
  minute_num55.style = `--c1_minute:${-1 * mdeg + 240}deg`;
  minute_num56.style = `--c1_minute:${-1 * mdeg + 246}deg`;
  minute_num57.style = `--c1_minute:${-1 * mdeg + 252}deg`;
  minute_num58.style = `--c1_minute:${-1 * mdeg + 258}deg`;
  minute_num59.style = `--c1_minute:${-1 * mdeg + 264}deg`;

  hour_num1.style = `--c1_hour:${-1 * hdeg + 300}deg`;
  hour_num2.style = `--c1_hour:${-1 * hdeg + 330}deg`;
  hour_num3.style = `--c1_hour:${-1 * hdeg + 360}deg`;
  hour_num4.style = `--c1_hour:${-1 * hdeg + 30}deg`;
  hour_num5.style = `--c1_hour:${-1 * hdeg + 60}deg`;
  hour_num6.style = `--c1_hour:${-1 * hdeg + 90}deg`;
  hour_num7.style = `--c1_hour:${-1 * hdeg + 120}deg`;
  hour_num8.style = `--c1_hour:${-1 * hdeg + 150}deg`;
  hour_num9.style = `--c1_hour:${-1 * hdeg + 180}deg`;
  hour_num10.style = `--c1_hour:${-1 * hdeg + 210}deg`;
  hour_num11.style = `--c1_hour:${-1 * hdeg + 240}deg`;
  hour_num12.style = `--c1_hour:${-1 * hdeg + 270}deg`;

  // degital clock
  if (hours >= 12) {
    document.getElementById("d_hour").innerHTML = String(hours - 12).padStart(2, "0");
  } else {
    document.getElementById("d_hour").innerHTML = String(hours).padStart(2, "0");
  }
  document.getElementById("d_minute").innerHTML = String(minutes).padStart(2, "0");
  document.getElementById("d_seconds").innerHTML = String(seconds).padStart(2, "0");

  if (hours >= 12) {
    document.getElementById("am_pm").innerHTML = "PM";
  } else {
    document.getElementById("am_pm").innerHTML = "AM";
  }
}, 1000);
