React does not render “false’, “null”, “undefined, or “NaN''
in the DOM. These values, when used in JSX, will result in
nothing being displayed.

However, “0° and empty strings (°""°) are exceptions:

** '0' ** is rendered in the DOM because it is considered a valid React node. This means that if "0° is the result
expression, it will appear in your UI. ‘

- *xEmpty strings#%x ("""°) are also considered valid S
and are rendered as well. \ yi IM