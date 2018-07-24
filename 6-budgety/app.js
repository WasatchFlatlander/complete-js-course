
//Module Format

var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }
    
    Expense.prototype.calculatePercentage = function(totalIncome){
        this.percentage = Math.round(this.value / totalIncome * 100);
    };
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        })
        data.totals[type] = sum;
    }
    
    return {
        addItem: function(type, des, val){
            var newItem, ID;
            if(data.allItems[type].length === 0){
                ID = 0;
            }else{
                ID = data.allItems[type][data.allItems[type].length-1].id+1;
            }
            if(type === 'exp'){
                newItem =  new Expense(ID, des, val); 
                
            }else if(type === 'inc'){
                newItem =  new Income(ID, des, val);
            }   
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        calculateBudget: function(){
            //sum of incomes
            calculateTotal('exp');
            calculateTotal('inc');
            data.budget = data.totals.inc - data.totals.exp;
            data.percentage = data.totals.inc > 0? Math.round((data.totals.exp/data.totals.inc) * 100) : 0;
        },
        
        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur,index,array){
                cur.calculatePercentage(data.totals.inc); 
            });
            
        },
        
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur,idx,array){
                return cur.getPercentage();  
            });  
            return allPerc;
        },
        
        getBudget: function(){
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalExp: data.totals.exp,
                totalInc: data.totals.inc,
            };  
        },
        
        deleteItem: function(type, id){
            var ids, index
            var ids = data.allItems[type].map(function(cur, index, array){
                return cur.id;
            });
            index = ids.indexOf(id);
            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
        },
        
        testing: function(){
            console.log(data);
        }
    }
    
})();

var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container.clearfix',
        expensesPercLabel: '.item__percentage'
    }
    
    return {
        getInput: function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        },
        
        addListItem: function(obj, type){
            //1 create html string with placeholder text
            var html, newHtml, element;
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else{
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'                
            }
            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
            //2 replace placeholder texts
            
            //Inseert the HTML into the DOM.
        },
        
        deleteListItem: function(selectorId){
            var el = document.getElementById(selectorId); 
            el.parentNode.removeChild(el);
        },
        
        clearFields: function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue)
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array){
                current.value = '';
            })
            fieldsArray[0].focus();
        },
        
        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },
        
        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            var nodeListForEach = function(list, callback){
                for(var i=0; i<list.length; i++){
                    callback(list[i],i);
                }  
            };
            nodeListForEach(fields, function(cur,index){
                var displayPercentage = percentages[index] > 0? percentages[index] + '%' : '---'
                cur.textContent = displayPercentage;
            });
        }
        
    }
    
    
    
})();

var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);


        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                //console.log('ENTER PRESSED')
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
    }
    
    var updateBudget = function(){
        // 1. Calculate the budget data controller
        budgetCtrl.calculateBudget();
        var budget = budgetCtrl.getBudget();
        UICtrl.displayBudget(budget);
        // 2. Return the budget data controller
        // 3. Display the budget UI Controller
    }
    
    var updatePercentages = function(){
        budgetCtrl.calculatePercentages();
        var percentages = budgetCtrl.getPercentages();
        UICtrl.displayPercentages(percentages);
    }
    
    var ctrlAddItem = function(){
        //1. Get the filed input data.
        //2. Add the item to budget controller.
        //3. Add Item to the UI.
        //4. Caluclate budget
        //5. Display budget.
        var input, newItem;
        input = UICtrl.getInput();
        if(input.description !== '' && !isNaN(input.value) && input.value>0){
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            UICtrl.addListItem(newItem,input.type);
            UICtrl.clearFields();
            updateBudget();        
            updatePercentages();
        }
    }
    
    var ctrlDeleteItem = function(event){
        // 1.
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            //itemID = inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            budgetCtrl.deleteItem(type,ID);
            UICtrl.deleteListItem(itemID);
            updateBudget();
        }
    }
    
    return {
        init: function(){
            console.log('Application has started');
            UICtrl.displayBudget({
                budget: 0,
                percentage: -1,
                totalExp: 0,
                totalInc: 0,
            });
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();