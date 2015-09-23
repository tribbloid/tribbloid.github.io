---
title: Download
layout: download
meta_description: A scalable query engine for web scraping, data mashup, and acceptance QA. Certified for Apache Spark.
meta_keywords: download, Tribbloid, SpookyStuff, Apache Spark, web scraper, data mining
summary: Download SpookyStuff, a scalable query engine for web scraping, data mashup, and acceptance QA
---

# Download Latest

{:.table}
|  | Stable ({{site.STABLE_VERSION}}) | Nightly ({{site.NIGHTLY_VERSION}}) |
| ------------- | ------------------------ | -------------- |
| Library | [Download .jar](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff/spark-{{site.SPARK_VERSION.first}}-scala-2.10/spookystuff-assembly-{{site.STABLE_VERSION}}.jar) | [Download .jar](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff/spark-{{site.SPARK_VERSION.first}}-scala-2.10/spookystuff-assembly-{{site.NIGHTLY_VERSION}}.jar) |
{% for version in site.SPARK_VERSION %}| Bundled with Spark {{version}} | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff/spark-{{version}}-scala-2.10/spookystuff-assembly-{{site.STABLE_VERSION}}-bin-spark{{version}}.zip) | [Download .zip](https://s3-us-west-1.amazonaws.com/spooky-bin/spookystuff/spark-{{version}}-scala-2.10/spookystuff-assembly-{{site.NIGHTLY_VERSION}}-bin-spark{{version}}.zip)
{% endfor %}

[Download Previous Versions](http://tribbloid.github.io/spookystuff/deploying.html#previous-versions)

# Download as a Dependency

<div class="codetabs">

<div data-lang="Maven">

{% highlight xml %}
<dependency>
    <groupId>org.tribbloid.spookystuff</groupId>
    <artifactId>spookystuff-core_2.10</artifactId>
    <version>{{site.STABLE_VERSION}}</version>
</dependency>
{% endhighlight %}

</div>

<div data-lang="SBT">

{% highlight scala %}
libraryDependencies += "org.tribbloid.spookystuff" % "spookystuff-core_2.10" % "{{site.STABLE_VERSION}}"
{% endhighlight %}

</div>

<div data-lang="Gradle">

{% highlight groovy %}
'org.tribbloid.spookystuff:spookystuff-core_2.10:{{site.STABLE_VERSION}}'
{% endhighlight %}

</div>

<div data-lang="Leiningen">

{% highlight clojure %}
[org.tribbloid.spookystuff/spookystuff-core_2.10 "{{site.STABLE_VERSION}}"]
{% endhighlight %}

</div>

</div>

### Source Code

Checkout from [GitHub Repository](https://github.com/tribbloid/spookystuff):

{% highlight bash %}
git checkout https://github.com/tribbloid/spookystuff
{% endhighlight %}

OR Download Source Code package:

<div class="table" markdown="1">

| Stable ({{site.STABLE_VERSION}}) | Nightly ({{site.NIGHTLY_VERSION}}) |
| ------------ | ----------- |
| [Download .zip](https://github.com/tribbloid/spookystuff/zipball/release-{{site.STABLE_VERSION}}) | [Download .zip](https://github.com/tribbloid/spookystuff/zipball/master) |
| [Download .tar.gz](https://github.com/tribbloid/spookystuff/tarball/release-{{site.STABLE_VERSION}}) | [Download .tar.gz](https://github.com/tribbloid/spookystuff/tarball/master) |

</div>
