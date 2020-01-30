function Calculadora() {
	this.display = document.querySelector('.display');
	
	this.inicia = () => {
		this.capturaCliques();
		this.capturaEnter();
	};

	this.capturaEnter = () => {
		this.display.addEventListener('keypress', e => {
			if (e.keyCode !== 13) return;
			this.realizaConta();
		});
	}

	this.capturaCliques = () => {
		document.addEventListener('click', event => {
			const el = event.target;
			if (el.classList.contains('btn-num')) this.addNumDisplay(el);
			if (el.classList.contains('btn-clear')) this.clear();
			if (el.classList.contains('btn-del')) this.del();
			if (el.classList.contains('btn-eq')) this.realizaConta();
		});
	}

	this.realizaConta = () => {
		try {
			// eval: sujeito a script malicioso. Uso apenas para estudo das funções factory e constructor 
			const conta = eval(this.display.value);

			if (!conta) {
				alert('Conta Inválida!');
				return
			}

			this.display.value = conta;
		} catch(e) {
			alert('Conta inválida!');
			return;
		}
	}

	this.addNumDisplay = el => {
		this.display.value += el.innerText;
		this.display.focus();
	};
	this.clear = () => this.display.value = '';		
	this.del = () => this.display.value = this.display.value.slice(0, -1);


}

const calculadora = new Calculadora();
calculadora.inicia();