require('dotenv').config();
const puppeteer = require('puppeteer');
const express = require('express');

(async () => {

  // const browser = await puppeteer.launch({
  //   headless: false,
  //   defaultViewport: false
  // });
  // const page = await browser.newPage();

  // await page.waitForTimeout(2000);

  // await page.goto('https://sistemavanguard.com.br/vanguard/index.php/');

  // await page.waitForTimeout(1000);

  // // Troque os valores de process.env.UNSPLASH_EMAIL e process.env.UNSPLASH_PASS pelo seu login e senha :)
  // await page.type('[name="exten"]', process.env.UNSPLASH_EMAIL)
  // await page.type('[name="password"]', process.env.UNSPLASH_PASS)

  // await page.click('[type="button"]')


  // page.on('dialog', async dialog => {
  //   await dialog.accept();
  // });

  // await page.click('a');


  // await page.waitForNavigation(1000);

  // // ACESSAR essa pagina
  // await page.goto('https://sistemavanguard.com.br/vanguard/index.php/receptivo');

  //digita cpf
  // await page.type('[name="cpfcli"]', '02074891903')

  // //clica no botao
  // await page.click('[type="submit"]')

  // //espera
  // await page.waitForTimeout(2000);

  // // clica botao
  // await page.click('a[class="btn btn-primary btn-block"]')

  // //espera
  // await page.waitForTimeout(2000);

  // // exibir dados
  // await page.click('button[class="btn btn-default"]')

  // await page.waitForTimeout(3000);
  // let item = []

  // let numBeneficio = "Null"
  // let name = "Null"
  // let cpf = "Null"
  // let bloq = "Null"
  // let ddb = "Null"
  // let especie = "Null"
  // let repLegal = "Null"
  // let pagamento = "Null"
  // let banco = "Null"
  // let agBanco = "Null"
  // let conta = "Null"
  // let endereco = "Null"
  // let cep = "Null"
  // let bairro = "Null"
  // let cidade = "Null"


  // const table = await page.$$('#content-dados-cliente')

  // for (const tb of table) {

  //   try {
  //     numBeneficio = await page.evaluate(el => el.querySelector('#numBeneficio2').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     name = await page.evaluate(el => el.querySelector('#cliNome2').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     cpf = await page.evaluate(el => el.querySelector('#cliCpf2').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     nascimento = await page.evaluate(el => el.querySelector('#cliNascimento').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     bloq = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(5) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     ddb = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(6) > td.text-right').textContent, tb)
  //   } catch (err) { }
  //   try {
  //     especie = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td.text-right > div').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     repLegal = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(8) > td.text-right > div').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     pagamento = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     banco = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     agBanco = await page.evaluate(el => el.querySelector('#cliAgencia2').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     conta = await page.evaluate(el => el.querySelector('#cliConta2').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     endereco = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     cep = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     bairro = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td.text-right').textContent, tb)
  //   } catch (err) { }

  //   try {
  //     cidade = await page.evaluate(el => el.querySelector('#cliCidade').textContent, tb)
  //   } catch (err) { }

  //   if (name !== 'Null') {
  //     item.push({
  //       numBeneficio: numBeneficio, 
  //       name: name, 
  //       cpf: cpf, 
  //       nascimento: nascimento, 
  //       bloq: bloq,
  //       ddb: ddb,
  //       especie: especie,
  //       repLegal: repLegal,
  //       pagamento: pagamento,
  //       banco: banco,
  //       agBanco: agBanco,
  //       conta: conta,
  //       endereco: endereco,
  //       cep: cep,
  //       bairro: bairro,
  //       cidade: cidade
  //     })
  //   }
  //   // console.log(conta, numBeneficio, name, cpf, nascimento)
  // }
  // console.log(item)

  const app = express()

  app.get('/', async function (req, res) {


    const queryCpf = req.query['cpf']

    if (queryCpf) {

      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
      });
      const page = await browser.newPage();

      // await page.waitForTimeout(2000);

      await page.goto('https://sistemavanguard.com.br/vanguard/index.php/');

      await page.waitForTimeout(2000);

      const data = await page.evaluate(() => document.querySelector('*').outerHTML);

      const pageTitle = await page.title();
      
      console.log(pageTitle);

      console.log(data);

      // Troque os valores de process.env.UNSPLASH_EMAIL e process.env.UNSPLASH_PASS pelo seu login e senha :)
      await page.type('[name="exten"]', process.env.UNSPLASH_EMAIL)
      await page.type('[name="password"]', process.env.UNSPLASH_PASS)

      await page.waitForTimeout(2000);

      await page.click('[type="button"]')


      page.on('dialog', async dialog => {
        await dialog.accept();
      });

      await page.click('a');


      await page.waitForNavigation(3000);

      // ACESSAR essa pagina
      await page.goto('https://sistemavanguard.com.br/vanguard/index.php/receptivo');
      // digita cpf
      await page.type('[name="cpfcli"]', queryCpf)

      // clica no botao
      await page.click('[type="submit"]')

      //espera
      await page.waitForTimeout(3000);

      // // clica botao
      await page.click('a[class="btn btn-primary btn-block"]')

      // //espera
      await page.waitForTimeout(3000);

      // // exibir dados
      await page.click('button[class="btn btn-default"]')

      await page.waitForTimeout(3000);
      let item = []

      let numBeneficio = "Null"
      let name = "Null"
      let cpf = "Null"
      let bloq = "Null"
      let ddb = "Null"
      let especie = "Null"
      let repLegal = "Null"
      let pagamento = "Null"
      let banco = "Null"
      let agBanco = "Null"
      let conta = "Null"
      let endereco = "Null"
      let cep = "Null"
      let bairro = "Null"
      let cidade = "Null"


      const table = await page.$$('#content-dados-cliente')

      for (const tb of table) {

        try {
          numBeneficio = await page.evaluate(el => el.querySelector('#numBeneficio2').textContent, tb)
        } catch (err) { }

        try {
          name = await page.evaluate(el => el.querySelector('#cliNome2').textContent, tb)
        } catch (err) { }

        try {
          cpf = await page.evaluate(el => el.querySelector('#cliCpf2').textContent, tb)
        } catch (err) { }

        try {
          nascimento = await page.evaluate(el => el.querySelector('#cliNascimento').textContent, tb)
        } catch (err) { }

        try {
          bloq = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(5) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          ddb = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(6) > td.text-right').textContent, tb)
        } catch (err) { }
        try {
          especie = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td.text-right > div').textContent, tb)
        } catch (err) { }

        try {
          repLegal = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(1) > table > tbody > tr:nth-child(8) > td.text-right > div').textContent, tb)
        } catch (err) { }

        try {
          pagamento = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(1) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          banco = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          agBanco = await page.evaluate(el => el.querySelector('#cliAgencia2').textContent, tb)
        } catch (err) { }

        try {
          conta = await page.evaluate(el => el.querySelector('#cliConta2').textContent, tb)
        } catch (err) { }

        try {
          endereco = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          cep = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          bairro = await page.evaluate(el => el.querySelector('#content-dados-cliente > div:nth-child(1) > div.col-md-9 > div > div.portlet-body > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td.text-right').textContent, tb)
        } catch (err) { }

        try {
          cidade = await page.evaluate(el => el.querySelector('#cliCidade').textContent, tb)
        } catch (err) { }

        if (name !== 'Null') {
          item.push({
            numBeneficio: numBeneficio,
            name: name,
            cpf: cpf,
            nascimento: nascimento,
            bloq: bloq,
            ddb: ddb,
            especie: especie,
            repLegal: repLegal,
            pagamento: pagamento,
            banco: banco,
            agBanco: agBanco,
            conta: conta,
            endereco: endereco,
            cep: cep,
            bairro: bairro,
            cidade: cidade
          })
        }
        console.log(conta, numBeneficio, name, cpf, nascimento)
      }
      console.log(item)
      return res.send(item)
      // return res.json({ message: queryCpf })
    } else {
      null
    }
  })


  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("Server listening on port " + port);
    console.log("test");
  });

})();
