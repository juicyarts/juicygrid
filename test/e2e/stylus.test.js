module.exports = {
	before: function(browser) {
		console.log('Running Tests os Stylus Code - 1200x600');
		browser
			.resizeWindow(1200, 600)
			.url("http://localhost:4000/test/stylus")
			.waitForElementVisible('body', 1000);
	},

	beforeEach: function(browser) {
		browser.resizeWindow(1210, 600);
	},
	"Stylus Tests: General": function(browser) {
		browser.assert.title("juicy-grid test: stylus");
	},
	"Stylus Tests: Jg-Row Tests": function(browser) {
		browser.expect.element('.jg-row').to.have.css('box-sizing').which.equals('border-box');
		browser.expect.element('.jg-row').to.have.css('display').which.equals('flex');
		browser.expect.element('.jg-row').to.have.css('flex-direction').which.equals('row');
		browser.expect.element('.jg-row').to.have.css('justify-content').which.equals('space-between');
		browser.expect.element('.jg-row').to.have.css('flex-wrap').which.equals('wrap');
		browser.expect.element('.jg-row').to.have.css('width').which.equals('1201px');
		// browser.expect.element('.jg-row').to.have.css('margin').which.equals('0 auto');

		browser.resizeWindow(1100, 600);
		browser.expect.element('.jg-row').to.have.css('width').which.equals('1100px');
		browser.expect.element('.jg-row').to.have.css('padding').which.equals('0px 10px');
	},
	"Stylus Tests: Jg-row-1-22 jg-col-1-22 Large": function(browser) {
		browser.resizeWindow(1210, 600);

		var rowcolumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var gutter = 10;

		// $gutterSize = (($rowColLength / $colLength - 1) * $jg_col_gutter) / ($rowColLength / $colLength)
		for (var i = 1; i < rowcolumns.length; i++) {
			// browser.expect.element('.jg-row.jg-row-'+ rowcolumns[i] + ' .jg-col-l-' + columns[j]).to.have.css('width').which.equals('calc(' + (100/rowcolumns[i]*columns[j]) + '%-' + gutterSize +'px');
			browser.getElementSize('.jg-row.jg-row-' + rowcolumns[i], function(result) {
				for (var j = 1; j < rowcolumns.length; j++) {
					var gutterSize = ((i / j - 1) * gutter / (i / i));

					var expectedColWidth = (result.value.width / i * j) - gutterSize;
			
					browser.getElementSize('.jg-row.jg-row-' + i + ' .jg-col-l-' + j, function(result) {
						console.log('.jg-row-' + i, ' .jg-col-l-' + j);
						console.log(expectedColWidth, result.value.width, gutterSize);
						this.assert.equal(result.value.width, expectedColWidth);
					})
				}
			})
		}
	},
	after: function(browser) {
		browser.end();
	}
};
