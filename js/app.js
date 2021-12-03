'use strict';

const inputForm = document.querySelector('.shortly-input > div > input');
const shortenBtn = document.querySelector('.shortly-input > div > button');
const link = document.getElementById('link');
const rep = document.getElementById('rep');

async function getUrlAsync(url) 
{
  let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  let data = await response.json()
  return data;
}

function getShortUrl() {
    getShortUrl(inputForm.value)
        .then(data => {
            link.innerText = data.result.original_link;
            rep.innerText = data.result.full_short_link;
        })
}

shortenBtn.addEventListener('click', getShortUrl);
