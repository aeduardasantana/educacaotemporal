/** assinatura: edufertanapo */
'use strict';

const TIME_ZONE = 'America/Sao_Paulo';
const MIN_YEAR = 2025;
const MAX_YEAR = 2030;
const MONTHS = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];
const WEEKDAYS = ['DOMINGO','SEGUNDA-FEIRA','TERÇA-FEIRA','QUARTA-FEIRA','QUINTA-FEIRA','SEXTA-FEIRA','SÁBADO'];

const fixedDates = {
  '01-01': ['holiday', 'CONFRATERNIZAÇÃO UNIVERSAL'],
  '04-21': ['holiday', 'TIRADENTES'],
  '04-24': ['commemorative', 'DIA NACIONAL DA LÍNGUA BRASILEIRA DE SINAIS'],
  '05-01': ['holiday', 'DIA MUNDIAL DO TRABALHO'],
  '09-19': ['commemorative', 'DIA NACIONAL DO TEATRO ACESSÍVEL'],
  '09-21': ['commemorative', 'DIA NACIONAL DE LUTA DA PESSOA COM DEFICIÊNCIA'],
  '09-23': ['commemorative', 'DIA INTERNACIONAL DAS LÍNGUAS DE SINAIS'],
  '09-26': ['commemorative', 'DIA NACIONAL DOS SURDOS'],
  '09-30': ['commemorative', 'DIA INTERNACIONAL DO SURDO E DO TRADUTOR E INTÉRPRETE'],
  '10-12': ['holiday', 'NOSSA SENHORA APARECIDA'],
  '10-28': ['optional', 'DIA DO SERVIDOR PÚBLICO'],
  '11-02': ['holiday', 'FINADOS'],
  '11-15': ['holiday', 'PROCLAMAÇÃO DA REPÚBLICA'],
  '11-20': ['holiday', 'DIA NACIONAL DE ZUMBI E DA CONSCIÊNCIA NEGRA'],
  '12-25': ['holiday', 'NATAL']
};

const seasons = {
  2025: [[2,20,'OUTONO'],[5,20,'INVERNO'],[8,22,'PRIMAVERA'],[11,21,'VERÃO']],
  2026: [[2,20,'OUTONO'],[5,21,'INVERNO'],[8,22,'PRIMAVERA'],[11,21,'VERÃO']],
  2027: [[2,20,'OUTONO'],[5,21,'INVERNO'],[8,23,'PRIMAVERA'],[11,22,'VERÃO']],
  2028: [[2,20,'OUTONO'],[5,20,'INVERNO'],[8,22,'PRIMAVERA'],[11,21,'VERÃO']],
  2029: [[2,20,'OUTONO'],[5,21,'INVERNO'],[8,22,'PRIMAVERA'],[11,21,'VERÃO']],
  2030: [[2,20,'OUTONO'],[5,21,'INVERNO'],[8,22,'PRIMAVERA'],[11,21,'VERÃO']]
};

const state = { year: null, month: null };
const $ = (id) => document.getElementById(id);

function zonedParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23' }).formatToParts(date);
  return Object.fromEntries(parts.filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
}
function dateOnly(year, month, day) { return new Date(Date.UTC(year, month, day)); }
function keyOf(month, day) { return `${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`; }
function formatDate(date) { return new Intl.DateTimeFormat('pt-BR', { day:'2-digit', month:'long', year:'numeric', timeZone:'UTC' }).format(date).toUpperCase(); }
function addDays(date, amount) { const d = new Date(date); d.setUTCDate(d.getUTCDate() + amount); return d; }

function easterDate(year) {
  const a=year%19,b=Math.floor(year/100),c=year%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),month=Math.floor((h+l-7*m+114)/31)-1,day=((h+l-7*m+114)%31)+1;
  return dateOnly(year, month, day);
}
function variableDates(year) {
  const easter = easterDate(year); const dates = {};
  const add = (offset, type, name) => { const d=addDays(easter,offset); dates[keyOf(d.getUTCMonth(),d.getUTCDate())]=[type,name]; };
  add(-48,'optional','SEGUNDA-FEIRA DE CARNAVAL'); add(-47,'optional','TERÇA-FEIRA DE CARNAVAL');
  add(-46,'optional','QUARTA-FEIRA DE CINZAS'); add(-2,'holiday','PAIXÃO DE CRISTO'); add(60,'optional','CORPUS CHRISTI');
  return dates;
}
function getEvent(year, month, day) {
  const key=keyOf(month,day); const variable=variableDates(year)[key]; if (variable) return variable;
  if (month===8 && day>=6 && day<=11) return ['commemorative','MEMÓRIA DO CONGRESSO DE MILÃO'];
  if (month===8 && day>=20 && day<=26) return ['commemorative','SEMANA INTERNACIONAL DOS SURDOS'];
  if (month===8 && new Date(year,month,day).getDay()===0 && day+7>30) return ['commemorative','DIA MUNDIAL DO SURDO'];
  return fixedDates[key] || null;
}
function currentDayDate() { const p=zonedParts(); return dateOnly(p.year,p.month-1,p.day); }
function relationFor(date) { const delta=Math.round((date-currentDayDate())/86400000); return delta===-1?'ONTEM':delta===0?'HOJE':delta===1?'AMANHÃ':''; }

function getSeason(now) {
  const p=zonedParts(now); const today=dateOnly(p.year,p.month-1,p.day); const entries=[];
  for (let y=p.year-1;y<=p.year+1;y++) (seasons[y]||seasons[Math.min(MAX_YEAR,Math.max(MIN_YEAR,y))]).forEach(([m,d,n])=>entries.push({date:dateOnly(y,m,d),name:n}));
  entries.sort((a,b)=>a.date-b.date); let index=entries.findIndex((x,i)=>x.date<=today && (!entries[i+1]||entries[i+1].date>today)); if(index<0) index=0;
  return {name:entries[index].name,start:entries[index].date,end:addDays(entries[index+1].date,-1)};
}
function getMoon(now) {
  const synodic=29.530588853, quarter=synodic/4, epoch=Date.UTC(2000,0,6,18,14); const current=now.getTime();
  const phaseIndex=Math.floor((current-epoch)/(quarter*86400000)); const start=new Date(epoch+phaseIndex*quarter*86400000); const end=new Date(epoch+(phaseIndex+1)*quarter*86400000-1);
  const names=['LUA NOVA','LUA CRESCENTE','LUA CHEIA','LUA MINGUANTE']; const icons=['●','◐','○','◑']; const index=((phaseIndex%4)+4)%4;
  return {name:names[index],icon:icons[index],start,end};
}

function updateNow() {
  const now=new Date(), p=zonedParts(now), period=p.hour<6?'DA MADRUGADA':p.hour<12?'DA MANHÃ':p.hour<18?'DA TARDE':'DA NOITE';
  $('hour-hand').style.transform=`rotate(${(p.hour%12)*30+p.minute*.5}deg)`; $('minute-hand').style.transform=`rotate(${p.minute*6+p.second*.1}deg)`; $('second-hand').style.transform=`rotate(${p.second*6}deg)`;
  $('time-text').textContent=`AGORA ${p.hour} HORAS, ${p.minute} MINUTOS E ${p.second} SEGUNDOS ${period}`;
  const today=dateOnly(p.year,p.month-1,p.day); $('date-text').textContent=`HOJE, DIA ${p.day} DE ${MONTHS[p.month-1]} DE ${p.year}`;
  const season=getSeason(now); $('season-text').textContent=`ESTAÇÃO DO ANO ATUAL: ${season.name}. COMEÇA NO DIA ${formatDate(season.start)} E TERMINA NO DIA ${formatDate(season.end)}.`;
  const moon=getMoon(now); $('moon-icon').textContent=moon.icon; $('moon-text').textContent=`FASE DA LUA ATUAL: ${moon.name}. COMEÇA NO DIA ${formatDate(moon.start)} E TERMINA NO DIA ${formatDate(moon.end)}.`;
}
function previewToday() {
  const p=zonedParts();
  $('selected-date-text').textContent=`HOJE, DIA ${p.day} DE ${MONTHS[p.month-1]} DE ${p.year}`;
}
function createCell(tag,className,text) { const el=document.createElement(tag); el.className=className; el.textContent=text; return el; }
function renderCalendar() {
  const grid=$('calendar-grid'); grid.replaceChildren(); $('year-title').textContent=`ANO ${state.year}`; $('month-title').textContent=`MÊS ${MONTHS[state.month]}`;
  grid.append(createCell('div','weekday','SEMANA')); WEEKDAYS.forEach(d=>grid.append(createCell('div','weekday',d)));
  const first=new Date(state.year,state.month,1).getDay(), days=new Date(state.year,state.month+1,0).getDate(), rows=Math.ceil((first+days)/7), today=currentDayDate();
  let day=1;
  for(let week=1;week<=rows;week++) {
    grid.append(createCell('div','week-number',`SEMANA ${week}`));
    for(let weekday=0;weekday<7;weekday++) {
      const position=(week-1)*7+weekday;
      if(position<first || day>days) { grid.append(createCell('div','empty-cell','')); continue; }
      const date=dateOnly(state.year,state.month,day), event=getEvent(state.year,state.month,day), relation=relationFor(date), button=document.createElement('button');
      button.type='button'; button.className='day-cell'; if(weekday===0) button.classList.add('is-sunday'); if(date<today) button.classList.add('is-past'); if(relation==='HOJE') button.classList.add('is-today'); if(event) button.classList.add(`is-${event[0]}`);
      const spoken=[relation,`DIA ${day}`,event?`${event[0]==='holiday'?'FERIADO':event[0]==='optional'?'PONTO FACULTATIVO':'DATA COMEMORATIVA'} ${event[1]}`:''].filter(Boolean).join(', ');
      button.setAttribute('aria-label',`${spoken}${date<today?', DIA PASSADO':''}`); button.dataset.spoken=spoken;
      button.append(createCell('span','day-complete-text',spoken));
      button.addEventListener('click',()=>{ $('selected-date-text').textContent=button.dataset.spoken; button.scrollIntoView({block:'nearest'}); }); grid.append(button); day++;
    }
  }
  $('previous-year').disabled=state.year===MIN_YEAR; $('next-year').disabled=state.year===MAX_YEAR;
}
function changeMonth(amount) { let y=state.year,m=state.month+amount; if(m<0){m=11;y--;} if(m>11){m=0;y++;} if(y<MIN_YEAR||y>MAX_YEAR)return; state.year=y; state.month=m; syncControls(); renderCalendar(); }
function syncControls(){ $('year-select').value=String(state.year); $('month-select').value=String(state.month); }
function initialize() {
  const p=zonedParts(), currentYear=Math.min(MAX_YEAR,Math.max(MIN_YEAR,p.year)); state.year=currentYear; state.month=p.month-1;
  for(let y=MIN_YEAR;y<=MAX_YEAR;y++) $('year-select').add(new Option(`ANO ${y}`,String(y))); MONTHS.forEach((m,i)=>$('month-select').add(new Option(`MÊS ${m}`,String(i)))); syncControls();
  $('year-select').addEventListener('change',e=>{state.year=Number(e.target.value);renderCalendar();}); $('month-select').addEventListener('change',e=>{state.month=Number(e.target.value);renderCalendar();});
  $('previous-year').addEventListener('click',()=>{if(state.year>MIN_YEAR){state.year--;syncControls();renderCalendar();}}); $('next-year').addEventListener('click',()=>{if(state.year<MAX_YEAR){state.year++;syncControls();renderCalendar();}});
  $('previous-month').addEventListener('click',()=>changeMonth(-1)); $('next-month').addEventListener('click',()=>changeMonth(1));
  $('current-date').addEventListener('click',()=>{const n=zonedParts();state.year=Math.min(MAX_YEAR,Math.max(MIN_YEAR,n.year));state.month=n.month-1;syncControls();renderCalendar();});
  updateNow(); previewToday(); setInterval(updateNow,1000); renderCalendar();
  if(window.VLibras) new window.VLibras.Widget('https://vlibras.gov.br/app');
}
document.addEventListener('DOMContentLoaded',initialize);
