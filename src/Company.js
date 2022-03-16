import React from 'react';
import './Company.css';
import checkmark from './checkmark.png';
import red_x from './red_x.png';
import legend from './legend.png';
import { PieChart } from 'react-minimal-pie-chart';

//https://www.forworkingfamilies.org/resources/policy-tools-living-wage
//https://www.launchstrategylegal.com/2020/09/09/workplace-harassment-policies-what-you-need-to-know/

function Company() {
  let company = document.getElementById("company-search").value;
  let s = JSON.stringify(data)
  let d = JSON.parse(s);
  function y_n(response){
    if (response==="Y"){
      return checkmark;
    }else{
      return red_x;
    }
  }

  let living_wage = y_n(d[company]["living_wage_policy"]);
  let anti_abuse = y_n(d[company]["anti_abuse_policy"]);
  let equal_pay = y_n(d[company]["equal_pay_pledge"]);

  let employees = Math.round(100 * d[company]["pct_women_emplys"])/100;
  let e_total = 100 - employees;

  let board = Math.round(100 * d[company]["pct_women_board"])/100;
  let b_total = 100 - board;

  let exec = Math.round(100 * d[company]["pct_female_exec"])/100;
  let ex_total = 100 - exec;

  let senior = Math.round(100 * d[company]["pct_women_senior_mgt"])/100;
  let s_total = 100 - senior;

  let pay_gap = d[company]["pay_gap"];
  console.log(pay_gap);
  let p_total = 100 - pay_gap;

  return(
      <div className="Info">
      <header className="header">
        
        <div className="logo"/>
       
        <span className="title">Gender Gap & Company Ethics Analysis</span> 
      </header>
      <body>
        <section className="company-info">
          <h1>{company}</h1>
          <h3>Category: {d[company]["group"]}</h3>
          <h5>Research Last Updated: {d[company]["date_latest_research"]}</h5>
          <h2>Company Description</h2>
          <p>{d[company]["desc"]}</p>
        </section>
        <section className="title">
        <h2>Pay Gap</h2>
        </section>
        <section className="pay-chart">
        <img src={legend} alt="legend"/>
          <div className="chart">
        <PieChart
            data={[
              { title: 'Women', value: pay_gap, color: '#383B51' },
              { title: 'Men', value: p_total, color: '#ADA8BE' },
            ]} 
          />
          </div>
          <h4>At {company}, for every dollar a man makes,<br></br> a woman on average makes <u>{pay_gap} cents.</u></h4>
          </section>
      <section className="chart-section">
      <h2>Women Make Up...</h2>
        <div className="pie-charts">
          <div className="chart">
          <PieChart
            data={[
              { title: 'Women', value: employees, color: '#383B51' },
              { title: 'Men', value: e_total, color: '#ADA8BE' },
            ]} 
          />
          <h3>{employees}% of the Company</h3>
          </div>
          <div className="chart">
          <PieChart
            data={[
              { title: 'Women', value: senior, color: '#383B51' },
              { title: 'Men', value: s_total, color: '#ADA8BE' },
            ]} 
          />
          <h3>{senior}% of Senior Management</h3>
          </div>
          <div className="chart">
          <PieChart
            data={[
              { title: 'Women', value: board, color: '#383B51' },
              { title: 'Men', value: b_total, color: '#ADA8BE' },
            ]} 
          />
          <h3>{board}% of the Board of Directors</h3>
          </div>
          <div className="chart">
          <PieChart
            data={[
              { title: 'Women', value: exec, color: '#383B51' },
              { title: 'Men', value: ex_total, color: '#ADA8BE' },
            ]} 
          />
          <h3>{exec}% of the Executives</h3>
          </div>
        </div>
      </section>
      <section className="yes_no">
          <h2>Ethical Policies in Place</h2>
          <div>
          <h4>Living Wage Policy?</h4>
          <img src={living_wage} alt="response"/>
          </div>
          <p>A living wage policy requires employers to pay a wage at or above the federal or state poverty line. Living wages are generally set as the wage a full time worker would need to support a family of four above the federal poverty line.</p>
          <div>
          <h4>Anti Abuse Policy?</h4>
          <img src={anti_abuse} alt="response"/>
          </div>
          <p>Abuse and harassment policies are in place to educate employees about abusive and inappropriate behavior. These policies define what is considered workplace harassment, prohibited conduct, and the specific types of behavior that violate the policies. They also outline the consequences for engaging in harassing and abusive activities as well as complaint procedures. </p>
          <div>
          <h4>Equal Pay Pledge?</h4>
          <img src={equal_pay} alt="response"/>
          </div>
          <p>By signing the Equal Pay Pledge, signatories agree to conduct an annual, company-wide gender pay analysis, review hiring and promotion procedures to reduce unconscious bias and structural barriers, and promote best practices to close the pay gap. More information <a href="https://obamawhitehouse.archives.gov/blog/2016/06/14/businesses-taking-equal-pay-pledge">here</a>.</p>
        </section>
      </body>
      <footer>
      </footer>
        <section>
  
        </section>
    </div>
    )
}

export default Company;


const data = 

  {"REA Group Ltd":
  {
    "desc":"REA Group Ltd and its subsidiary companies, known as the REA Group, make up a global online real estate advertising company. REA Group is headquartered in Melbourne, Australia with subsidiary offices in Wanchai, Hong Kong and Gurugram, India.",
    "ric": "REA.AX",
    "isin": "AU000000REA9",
    "cusip": "Q8051B108",
    "company_name": "REA Group Ltd",
    "country_of_exchange": "Australia",
    "sector": "Communication Services",
    "group": "Media & Entertainment",
    "pct_women_board": 37.5,
    "pct_female_exec": 55.555555555556,
    "pct_women_senior_mgt": 49,
    "pct_women_emplys": 50.1,
    "prmtn_career_devl": 0.978043912176,
    "living_wage_policy": "N",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "N",
    "date_latest_research": "2021-01-26",
    "equal_pay_pledge":"N",
    "pay_gap":95
  },
  "L'Oreal SA": {
    "desc":"L'Oréal Paris is a French personal care company headquartered in Clichy, Hauts-de-Seine with a registered office in Paris. It is the world's largest cosmetics company and has developed activities in the field concentrating on hair colour, skin care, sun protection, make-up, perfume, and hair care.",
    "ric": "OREP.PA",
    "isin": "FR0000120321",
    "cusip": "F58149133",
    "company_name": "L'Oreal SA",
    "country_of_exchange": "France",
    "sector": "Consumer Staples",
    "group": "Household & Personal Products",
    "pct_women_board": 57.142857142857,
    "pct_female_exec": 26.315789473684,
    "pct_women_senior_mgt": 54,
    "pct_women_emplys": 70,
    "prmtn_career_devl": 0.771428571429,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2021-01-16",
    "equal_pay_pledge":"Y",
    "pay_gap":97.6
  },
  "Moneysupermarket.Com Group PLC":{
    "desc":"Moneysupermarket.com Group PLC is a British price comparison website-based business specialising in financial services. The website enables consumers to compare prices on a range of products, including energy car insurance, home insurance, travel insurance, mortgages, credit cards and loans.",
    "ric": "MONY.L",
    "isin": "GB00B1ZBKY84",
    "cusip": "G6258H101",
    "company_name": "Moneysupermarket.Com Group PLC",
    "country_of_exchange": "United Kingdom",
    "sector": "Consumer Discretionary",
    "group": "Retailing",
    "pct_women_board": 62.5,
    "pct_female_exec": 25,
    "pct_women_senior_mgt": 44,
    "pct_women_emplys": 42,
    "prmtn_career_devl": 1.047619047619,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "ND",
    "date_latest_research": "2021-01-14",
    "equal_pay_pledge":"N",
    "pay_gap":94.7
  },
  "General Motors Co":{
    "desc":"General Motors Company is an American multinational automotive manufacturing corporation. Headquartered in Detroit, Michigan, the company is the largest automobile manufacturer based in the United States and one of the largest worldwide.",
    "ric": "GM.N",
    "isin": "US37045V1008",
    "cusip": "37045V100",
    "company_name": "General Motors Co",
    "country_of_exchange": "United States of America",
    "sector": "Consumer Discretionary",
    "group": "Automobiles & Components",
    "pct_women_board": 54.545454545455,
    "pct_female_exec": 20,
    "pct_women_senior_mgt": 32.2,
    "pct_women_emplys": 21.8,
    "prmtn_career_devl": 1.477064220183,
    "living_wage_policy": "Y",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2020-12-28",
    "equal_pay_pledge":"Y",
    "pay_gap":100
  },
  "Dnb ASA":{
    "desc":"DNB ASA is Norway's largest financial services group with total combined assets of more than NOK 1.9 trillion and a market capitalisation NOK 164 billion as of 20 May 2016. DNB's head office is located in Oslo.",
    "ric": "DNB.OL",
    "isin": "NO0010031479",
    "cusip": "R1640U124",
    "company_name": "Dnb ASA",
    "country_of_exchange": "Norway",
    "sector": "Financials",
    "group": "Banks",
    "pct_women_board": 60,
    "pct_female_exec": 50,
    "pct_women_senior_mgt": 40,
    "pct_women_emplys": 47.4,
    "prmtn_career_devl": 0.84388185654,
    "living_wage_policy": "N",
    "eq_pay_pub": "Y",
    "eq_pay_gap": "N",
    "parental_leave_primary_company": "",
    "parental_leave_primary_num_weeks_company": "",
    "flex_hours": "Y",
    "flex_loc": "Y",
    "anti_abuse_policy": "Y",
    "date_latest_research": "2020-12-28",
    "equal_pay_pledge":"N",
    "pay_gap":96
  }};
 
/*
  <a href="https://www.qries.com/">
  <img alt="logo" src="/gender_gap_logo.png"
  width="2.5rem" height="3.3rem"/>
</a>
</div>
*/

