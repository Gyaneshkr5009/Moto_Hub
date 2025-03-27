import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

function FinancialCalculator() {
    const [carPrice, setCarPrice] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMonthlyPayment = () => {
        const Principal = Number(carPrice) - Number(downPayment);
        const MonthlyInterestRate = Number(interestRate) / 1200;

        if (MonthlyInterestRate === 0) {
            setMonthlyPayment((Principal / Number(loanTerm)).toFixed(2));
        } else {
            const MonthlyPayment = (
                (Principal * MonthlyInterestRate) /
                (1 - Math.pow(1 + MonthlyInterestRate, -Number(loanTerm)))
            ).toFixed(2);
            setMonthlyPayment(MonthlyPayment);
        }
    };

    return (
        <div className='p-10 border rounded-xl shadow-md mt-7 bg-white'>
            <h2 className='font-medium text-2xl text-gray-800 text-center'>Financial Calculator</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                <div className="w-full">
                    <label className="text-gray-600">Price</label>
                    <Input
                        type="number"
                        value={carPrice}
                        onChange={(e) => setCarPrice(e.target.value)}
                        placeholder="₹ Enter Price"
                    />
                </div>
                <div className="w-full">
                    <label className="text-gray-600">Interest Rate (%)</label>
                    <Input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        placeholder="Enter Interest Rate"
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                <div className="w-full">
                    <label className="text-gray-600">Loan Term (Months)</label>
                    <Input
                        type="number"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        placeholder="Enter Loan Term"
                    />
                </div>
                <div className="w-full">
                    <label className="text-gray-600">Down Payment</label>
                    <Input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        placeholder="₹ Enter Down Payment"
                    />
                </div>
            </div>

            <Button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white" size="lg" onClick={calculateMonthlyPayment}>
                Calculate
            </Button>

            {monthlyPayment !== null && (
                <div className="mt-5 p-4 bg-gray-100 text-center rounded-lg">
                    <h3 className="text-lg font-medium text-gray-800">Estimated Monthly Payment</h3>
                    <p className="text-xl font-semibold text-blue-600">₹ {monthlyPayment}</p>
                </div>
            )}
        </div>
    );
}

export default FinancialCalculator;
