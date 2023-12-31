import * as Yup from "yup";

function configureValidations() {
    Yup.addMethod(Yup.string, 'firstLetterUpperCase', function () {
        return this.test('first-letter-uppercase',
            'First Letter Must Be  UpperCase', function (value) {
                if (value && value.length > 0) {
                    const firstLetter = value.substring(0, 1);
                    return firstLetter === firstLetter.toUpperCase();
                }
                return true;
            });

    })
}

export default configureValidations;


