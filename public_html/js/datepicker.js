$(function () {
    //Config datepiker matrializecss () language
    $('.datepicker').datepicker({
        selectMonths: true,//Creates a dropdown to control month
        selectYears: 15,//Creates a dropdown of 15 years to control year
        //The title label to use for the month nav buttons
        labelMonthNext: 'Proximo Mês',
        labelMonthPrev: 'Mês Anterior',
        //The title label to use for the dropdown selectors
        labelMonthSelect: 'Selecionar Mês',
        labelYearSelect: 'Selecionar Ano',
        //Months and weekdays
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        //Materialize modified
        weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        //Today and clear
        close: 'Fechar',
        //The format to show on the `input` element
        format: 'dd/mm/yyyy',
        today: 'Hoje',
        clear: 'Limpar',
        done: 'Ok',
        nextMonth: 'Próximo mês',
        previousMonth: 'Mês anterior'
    });
});