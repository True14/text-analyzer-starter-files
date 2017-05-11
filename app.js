const countText = (arr) => {
  let count = 0;
  arr.forEach(index => {
    count++;
  });
  return count;
}

const uniqueCount = (arr) => {
  const count = {};

  arr.forEach(s => {
    if (count[s]){
      count[s] += 1;
    } else {
      count[s] = 1;
    }
  })

    return Object.keys(count).length;
}

const averageLength = (arr) => {
  let count = 0;

  arr.forEach(s => {
    count+= s.length;
  })

  return Number(Math.round(count/arr.length + 'e+2') + "e-2");
}
$(() => {
  $('form').submit(()=> {
    event.preventDefault();
    const textArea = $('form textarea').val().split(' ');

    $('#word-count').text(countText(textArea));
    $('#unique-count').text(uniqueCount(textArea));
    $('#average-length').text(averageLength(textArea));
  })
})
