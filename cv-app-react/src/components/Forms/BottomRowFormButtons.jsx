import Button from '../Button'

export default function BottomRowFormButtons({ onCloseForm, isEditing }) {
    return (
        <div className="btns-row">
            <div className="cancel-save">
                <Button
                    type="cancel"
                    onClick={onCloseForm}
                    btnType="reset"
                >
                    Cancel
                </Button>
                <Button
                    type="save"
                    btnType="submit"
                >
                    {isEditing ? 'Edit' : 'Save'}
                </Button>
            </div>
        </div>
    )
}
