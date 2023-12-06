import { useEffect, useState } from "react"

export default function EquipmentFieldset({
    onCheckboxChange,
    equipmentData = {}
}) {
    const [equipment, setEquipment] = useState(equipmentData);
    useEffect(() => {
        setEquipment(equipmentData);
    }, [equipmentData]);

    const onChange = (e) => {
        setEquipment(state => ({
            ...state,
            [e.target.name]: {
                isChecked: e.target.checked,
                label: e.target.previousElementSibling.innerHTML,
            }
        }));
        onCheckboxChange(e);
    };

    return (
        <fieldset className='equipmentData'>
            <div className="formRow checkbox">
                <div className="inputData">
                    <label htmlFor="airCondition">Air condition</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="airCondition"
                        id="airCondition"
                        checked={equipment.airCondition?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="autopilot">Autopilot</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="autopilot"
                        id="autopilot"
                        checked={equipment.autopilot?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="divingEquipment">Diving equipment</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="divingEquipment"
                        id="divingEquipment"
                        checked={equipment.divingEquipment?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="gameConsole">Game console</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="gameConsole"
                        id="gameConsole"
                        checked={equipment.gameConsole?.isChecked}
                    />
                </div>
            </div>

            <div className="formRow checkbox">
                <div className="inputData">
                    <label htmlFor="heating">Heating</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="heating"
                        id="heating"
                        checked={equipment.heating?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="radar">Radar</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="radar"
                        id="radar"
                        checked={equipment.radar?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="iceMaker">Ice maker</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="iceMaker"
                        id="iceMaker"
                        checked={equipment.iceMaker?.isChecked}
                    />
                </div>

                <div className="inputData">
                    <label htmlFor="refrigerator">Refrigerator</label>
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name="refrigerator"
                        id="refrigerator"
                        checked={equipment.refrigerator?.isChecked}
                    />
                </div>
            </div>
        </fieldset>
    )
}