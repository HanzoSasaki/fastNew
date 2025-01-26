const data = [
  { "name": "Produto A", "manufacturer": "Fabricante X", "cost": 10.5, "sale": 15.0, "note": "Bom desempenho" },
  { "name": "Produto B", "manufacturer": "Fabricante Y", "cost": 8.0, "sale": 7.5, "note": "Reduzir preço" },
  { "name": "Produto C", "manufacturer": "Fabricante Z", "cost": 20.0, "sale": 25.0, "note": "Manter preço" }
];

const table = document.getElementById('data-table');
const tbody = table.querySelector('tbody');
const downloadButton = document.getElementById('downloadButton');
const downloadPdfButton = document.getElementById('downloadPdf');

// Processar os dados JSON e preencher a tabela
data.forEach(item => {
  const cost = parseFloat(item.cost);
  const sale = parseFloat(item.sale);

  const percentage = ((sale - cost) / cost) * 100;
  const profit = percentage > 0 ? percentage : 0;
  const loss = percentage < 0 ? Math.abs(percentage) : 0;

  const tr = document.createElement('tr');
  tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.manufacturer}</td>
      <td>R$ ${cost.toFixed(2)}</td>
      <td>R$ ${sale.toFixed(2)}</td>
      <td>${profit.toFixed(2)}%</td>
      <td>${loss.toFixed(2)}%</td>
      <td contenteditable="true">${item.note}</td>
  `;
  tbody.appendChild(tr);
});

const labels = [];
const profitData = [];
const lossData = [];

// Preparar dados para o gráfico
data.forEach(item => {
  const cost = parseFloat(item.cost);
  const sale = parseFloat(item.sale);

  const percentage = ((sale - cost) / cost) * 100;
  const profit = percentage > 0 ? percentage : 0;
  const loss = percentage < 0 ? Math.abs(percentage) : 0;

  labels.push(item.name);
  profitData.push(profit);
  lossData.push(loss);
});

// Configuração do gráfico
const ctx = document.getElementById('profitLossChart').getContext('2d');
const profitLossChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labels,
      datasets: [
          {
              label: 'Lucro (%)',
              data: profitData,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          },
          {
              label: 'Prejuízo (%)',
              data: lossData,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }
      ]
  },
  options: {
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Percentual (%)'
              }
          },
          x: {
              title: {
                  display: true,
                  text: 'Produtos'
              }
          }
      }
  }
});

// Função para gerar o PDF
downloadPdfButton.addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // Adiciona o título
  pdf.text("Sistema de Lucro e Prejuízo", 10, 10);

  // Adiciona a tabela ao PDF
  const rows = Array.from(tbody.children);
  let y = 20;

  rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll('td');
      let x = 10;

      cells.forEach((cell) => {
          pdf.text(cell.innerText, x, y);
          x += 40;
      });

      y += 10;
  });

  // Adiciona o gráfico ao PDF
  const chartCanvas = document.getElementById('profitLossChart');
  const chartImage = chartCanvas.toDataURL('image/png', 1.0);

  pdf.addImage(chartImage, 'PNG', 10, y, 180, 100);

  // Baixa o PDF
  pdf.save('analise_lucro_prejuizo.pdf');
});

// Função para gerar o CSV
document.getElementById('downloadCsv').addEventListener('click', () => {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Nome do Produto;Fabricante;Preço de Compra (R$);Preço de Venda (R$);Lucro (%);Prejuízo (%);Observação\n";

  const tbody = document.querySelector('tbody');
  Array.from(tbody.children).forEach(row => {
      const cells = row.querySelectorAll('td');
      const rowData = Array.from(cells).map(cell => cell.textContent).join(';');
      csvContent += rowData + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'resumo_lucro_prejuizo.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});